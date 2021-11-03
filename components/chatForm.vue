<template>
  <div class="input-group mb-0">
    <div class="input-group-prepend">
      <span class="input-group-text"><i class="fa fa-send"></i></span>
    </div>
    <input type="text" class="form-control" v-model="text" @keypress.enter="send" placeholder="Enter text here..." />
  </div>
</template>
<script>
export default {
  name: 'chatForm',
  data: () => ({
    text: ''
  }),
  methods: {
    send() {
      this.$socket.emit('createMessage', {
        text: this.text,
        id: this.$store.state.user.id
      }, data => {
        if (typeof data === 'string') {
          console.error(data);
        } else {
          this.text = ''
        }
      }
      )
    }
  }
}
</script>