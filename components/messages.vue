<template>
  <ul class="m-b-0">
    <el-alert
      title="Админ"
      type="info"
      :description="text"
      show-icon
      v-if="name === 'admin'"
    />
    <li class="clearfix" v-else>
      <div class="message-data text-right">
        <span class="messsage-data-time">{{ time }}</span>
        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="">
      </div>
      <div class="message" :class="owner ? 'my-message float-right' : 'other-message'">
        {{ text }}
      </div>
    </li>
    <!-- <li class="clearfix" v-for="message in messages" :key="message.id">
      <div class="message-data text-right">
        <span class="message-data-time">10:10 AM, Today</span>
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          alt="avatar"
        />
      </div>
      <div class="message other-message float-right">
        Hi Aiden, how are you? How is the project coming along?
      </div>
    </li>
    <li class="clearfix">
      <div class="message-data">
        <span class="message-data-time">10:12 AM, Today</span>
      </div>
      <div class="message my-message">Are we meeting today?</div>
    </li>
    <li class="clearfix">
      <div class="message-data">
        <span class="message-data-time">10:15 AM, Today</span>
      </div>
      <div class="message my-message">
        Project has been already finished and I have results to show you.
      </div>
    </li> -->
  </ul>
</template>
<script>
export default {
  name: "messages",
  props: {
    name: String,
    text: String,
    owner: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    timeOptions: {
      hour: '2-digit',
      minute: '2-digit',
      weekday: 'long'
    },
    time: null

  }),
  mounted() {
    this.time = new Date().toLocaleDateString('ru-RU', this.timeOptions)
  }
};
</script>
