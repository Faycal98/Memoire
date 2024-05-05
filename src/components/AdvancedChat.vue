<template>
  <div>
    {{ channelNames }}

    <vue-advanced-chat
      height="calc(100vh - 20px)"
      :current-user-id="currentUserId"
      :rooms="JSON.stringify(rooms)"
      :show-audio="false"
      :rooms-loaded="true"
      :room-id="1"
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

<script setup>
import axios from "axios";
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import Pusher from "pusher-js";
import { register } from "vue-advanced-chat";

register();

const userData = JSON.parse(localStorage.getItem("userData"));
console.log(userData.id);
const messageEventName = "client-new-message";
const chatChannelName = "presence-groupChat4";
let channelNames = ref("");
const route = useRoute();
let currentUserId = ref(userData.id.toString());
let currentUser = ref("");
let rooms = ref([
  {
    roomId: "1",
    roomName: "1",
    avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
    users: [
      {
        _id: "1",
        username: "John Doe",
        status: {
          state: "online",
          lastChanged: "today, 14:30",
        },
      },
      {
        _id: "2",
        username: "John Snow",
        status: {
          state: "online",
          lastChanged: "today, 12:30",
        },
      },
    ],
  },

  {
    roomId: "2",
    roomName: "Mike Snow",
    avatar: "https://66.media.tumblr.com/avatar_c6a8eae4303e_512.pnj",
    users: [
      {
        _id: "1234",
        username: "Sonny Doe",
        status: {
          state: "online",
          lastChanged: "today, 14:30",
        },
      },
      {
        _id: "4321",
        username: "Luther Snow",
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

var pusher = new Pusher("8b8fd82e17f918d8a881", {
  userAuthentication: {
    endpoint: "http://localhost:8000/pusher/user-auth",
    transport: "ajax",
    headers: { "x-access-token": userData.accessToken },
  },
  channelAuthorization: {
    endpoint: "http://localhost:8000/pusher/auth",
    headers: { "x-access-token": userData.accessToken },
  },
  cluster: "mt1",
  forceTLS: true,
});

onMounted(() => {
  Pusher.logToConsole = true;
  pusher.signin();

  const channel = pusher.subscribe(chatChannelName);
  channel.bind("pusher:subscription_succeeded", () => {
    let me = channel.members.me;
  });

  channel.bind(messageEventName, (data) => {
    console.log(data);
    messages.value.push({
      _id: data._id,
      content: data.content,
      senderId: data.senderId,
      timestamp: data.timestamp,
      date: data.date,
    });
  });

  // Pusher.logToConsole = true;
  /*   console.log("mounted", channelNames.value);
  const channel = pusher.subscribe(channelNames.value);
  channel.bind("message", function (data) {


    messages.value.push({
      _id: messages.value.length + 1,
      content: data.message,
      senderId: data.senderId,
      username: data.username,
      date: data.date,
      timestamp: data.timestamp,
    });
  }); */
});

let fetchMessages = ({ room, options = {} }) => {
  console.log(room.users);
  let id1 = parseInt(room.users[0]._id);
  let id2 = parseInt(room.users[1]._id);
  console.log(id2);
  channelNames.value = `chat${id1 + id2}`;

  setTimeout(() => {
    if (options.reset) {
      messages.value = addMessages(true);
    } else {
      messages.value = [...addMessages(), ...messages.value];
      messagesLoaded.value = true;
    }
    // this.addNewMessage()
  });
  console.log(messages.value);
};

/* watch(channelNames, async (newQuestion, oldQuestion) => {
  console.log("watch", oldQuestion, newQuestion);
  if (oldQuestion) {
    pusher.unsubscribe(oldQuestion);
    const channel = pusher.subscribe(newQuestion);
    channel.bind("message", function (data) {
      //alert(JSON.stringify(data));
      //this.messages.push(data);
      console.log("cc");
      messages.value.push({
        _id: messages.value.length + 1,
        content: data.message,
        senderId: data.senderId,
        username: data.username,
        date: data.date,
        timestamp: data.timestamp,
      });
    });
  }
}); */
let addMessages = (reset) => {
  const messages = ref([]);

  for (let i = 0; i < 1; i++) {
    messages.value.push({
      _id: reset ? i : messages.value.length + i,
      content: `${reset ? "" : "paginated"} message ${i + 1}`,
      senderId: "2",
      username: "John Doe",
      date: "13 November",
      timestamp: "10:20",
    });
  }

  return messages.value;
};

let sendMessage = async (message) => {
  //console.log(channelNames.value);
  console.log(message.content);
  messages.value.push({
    _id: messages.value.length,
    content: message.content,
    senderId: currentUserId.value,
    timestamp: new Date().toString().substring(16, 21),
    date: new Date().toDateString(),
  });
  const channel = pusher.channel(chatChannelName);
  channel.trigger(messageEventName, {
    _id: messages.value.length,
    content: message.content,
    senderId: currentUserId.value,
    timestamp: new Date().toString().substring(16, 21),
    date: new Date().toDateString(),
  });

  /* await axios.post("http://localhost:8000/api/messages", ); */
};
let listen = () => {
  console.log("lISTEN");
};
let addNewMessage = () => {
  setTimeout(() => {
    this.messages = [
      ...this.messages,
      {
        _id: messages.value.length,
        content: "NEW MESSAGE",
        senderId: "1234",
        timestamp: new Date().toString().substring(16, 21),
        date: new Date().toDateString(),
      },
    ];
  }, 2000);
};
</script>
<style></style>
