<template>
  <div class="container">
    <div class="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
      <div
        class="d-flex align-items-center flex-shrink-0 p-3 link-dark text-decoration-none border-bottom"
      >
        <input class="fs-5 fw-semibold" v-model="username" />
      </div>
      <div class="list-group list-group-flush border-bottom scrollarea">
        <div
          class="list-group-item list-group-item-action py-3 lh-tight"
          v-for="message in messages"
          :key="message"
        >
          <div class="d-flex w-100 align-items-center justify-content-between">
            <strong class="mb-1">{{ message.username }}</strong>
          </div>
          <div class="col-10 mb-1 small">{{ message.message }}</div>
        </div>
      </div>

      {{ testChat }}
    </div>
    <form @submit.prevent="submit">
      <input
        class="form-control"
        placeholder="Write a message"
        v-model="message"
      />
    </form>

    <button @click="submit2">Join chat</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";
import Pusher from "pusher-js";

export default {
  name: "chat",
  setup() {
    const testChat = ref([]);
    const username = ref("username");
    const messages = ref([]);
    const message = ref("");

    var pusher = new Pusher("8b8fd82e17f918d8a881", {
   /*    channelAuthorization: {
        endpoint: "http://localhost:8000/pusher/auth",
        headers: {
          "x-access-token": "hhidddddddddddd838",
        },
      }, */

      cluster: "mt1",
      forceTLS: true,
    });

    onMounted(() => {
      Pusher.logToConsole = true;
      pusher.subscribe("presence-groupChat2");
      /* 
      const channel2 = pusher.subscribe("channel-1");
      channel2.bind("test_event", (data) => {
        console.log(data);
        testChat.value.push(JSON.stringify(data));
        console.log(testChat.value);
      });

      const channel = pusher.subscribe("chat");
      channel.bind("message", (data) => {
        console.log(messages.value);
        console.log(data);
        messages.value.push(data);
      }); */
    });

    const submit = async () => {
      /*  await fetch("http://localhost:8000/api/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username.value,
          message: message.value,
        }),
      });
 */
      /* 
      const channel = pusher.channel("presence-groupChat");
      channel.trigger("client-new-message", {
        sender: "chat.owner",
        text: "message",
      
      });
      message.value = ""; */
    };

    const submit2 = (e) => {
      /*    e.preventDefault();

      pusherClient.signin();

      const presenceChannel = pusherClient.subscribe("presence-groupChat");

      presenceChannel.bind("pusher:subscription_succeeded", function () {
        var me = presenceChannel.members.me;
        var userId = me.id;
        var userInfo = me.info;
      });
 */
      /*   presenceChannel.trigger("client-new-message", {
        sender: "Saul",
        text: "jdjd",
     
      }); */

      message.value = "";
    };

    return {
      username,
      messages,
      message,
      submit2,
      submit,
      testChat,
    };
  },
};
</script>

<style>
.scrollarea {
  min-height: 500px;
}
</style>
