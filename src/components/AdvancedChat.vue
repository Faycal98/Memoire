<template>
  <div>
    <vue-advanced-chat
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :show-audio="false"
      :rooms-loaded="true"
      :text-messages="
        JSON.stringify({
          ROOMS_EMPTY: 'Aucune conversation',
          ROOM_EMPTY: 'Aucune conversation sélectionnée',
          NEW_MESSAGES: 'Nouveaux messages',
          MESSAGE_DELETED: 'Ce message a été supprimé',
          MESSAGES_EMPTY: 'Aucun message',
          CONVERSATION_STARTED: 'La conversation a commencée le :',
          TYPE_MESSAGE: 'Tapez votre message',
          SEARCH: 'Rechercher',
          IS_ONLINE: 'est en ligne',
          LAST_SEEN: 'dernière connexion ',
          IS_TYPING: 'est en train de taper...',
          CANCEL_SELECT_MESSAGE: 'Annuler Sélection',
        })
      "
      :messages="JSON.stringify(messages)"
      :messages-loaded="messagesLoaded"
      @send-message="sendMessage($event.detail[0])"
      @fetch-messages="fetchMessages($event.detail[0])"
    />
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import Pusher from "pusher-js";
import { register } from "vue-advanced-chat";

register();

export default {
  setup() {
    const route = useRoute();
    console.log(route.query.idcurrent, 19292);
    let currentUserId = ref("");
    let currentUser = ref("");
    let rooms = ref([
      {
        roomId: "1",
        roomName: "John Snow",
        avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
        users: [
          {
            _id: "1234",
            username: "John Doe",
            status: {
              state: "online",
              lastChanged: "today, 14:30",
            },
          },
          {
            _id: "4321",
            username: "John Snow",
            status: {
              state: "online",
              lastChanged: "today, 12:30",
            },
          },
        ],
      },
    ]);
    const messages = ref([]);
    const messagesLoaded = ref(false);
    onMounted(() => {
      rooms.value[0].roomName = route.query.sender;
      currentUser.value = "John";
      currentUserId.value = route.query.idcurrent;
      Pusher.logToConsole = true;

      const pusher = new Pusher("8b8fd82e17f918d8a881", {
        cluster: "mt1",
      });

      const channel = pusher.subscribe("chat");
      channel.bind("message", function (data) {
        //alert(JSON.stringify(data));
        //this.messages.push(data);
        console.log(messages.value);
        console.log(data);
        messages.value.push({
          _id: messages.value.length + 1,
          content: data.message,
          senderId: data.senderId,
          username: data.username,
        });
      });
    });
    let fetchMessages = ({ options = {} }) => {
      console.log(messages.value);
      setTimeout(() => {
        if (options.reset) {
          messages.value = addMessages(true);
        } else {
          messages.value = [...addMessages(), ...messages.value];
          messagesLoaded.value = true;
        }
        // this.addNewMessage()
      });
    };
    let addMessages = (reset) => {
      const messages = ref([]);

      for (let i = 0; i < 1; i++) {
        messages.value.push({
          _id: reset ? i : messages.value.length + i,
          content: `${reset ? "" : "paginated"} message ${i + 1}`,
          senderId: route.query.idsender,
          username: "John Doe",
          date: "13 November",
          timestamp: "10:20",
        });
      }

      return messages.value;
    };

    let sendMessage = async (message) => {
      await fetch("http://localhost:8000/api/messages", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          username: currentUser.value,
          senderId: route.query.idcurrent,
          message: message.content,
        }),
      });
    };

    let addNewMessage = () => {
      setTimeout(() => {
        this.messages = [
          ...this.messages,
          {
            _id: this.messages.length,
            content: "NEW MESSAGE",
            senderId: "1234",
            timestamp: new Date().toString().substring(16, 21),
            date: new Date().toDateString(),
          },
        ];
      }, 2000);
    };
    return {
      sendMessage,
      messagesLoaded,
      rooms,
      fetchMessages,
      addNewMessage,
      addMessages,
      currentUser,
      currentUserId,
      messages,
    };
  },
};
</script>
<style></style>
