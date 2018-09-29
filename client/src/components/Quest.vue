<template>
<transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal col-md-4 col-xs-6">
    <header class="modal-header">
        <slot class="header d-flex justify-content-between">
            <h1>DAILY QUEST!</h1>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div class="mw">
            <p>{{quest[Math.floor(Math.random() * quest.length)]}}</p>
            </div>
        </slot>
        </div>
        <div class="modal-footer">
        <slot class="footer">
            <p>Do you accept?</p>
            <button type="button" class="btn btn-success" @click="close">
                Yep
                </button>
            <button type="button" class="btn btn-danger" @click="close">
                Nope
                </button>
        </slot>
        </div>
    </div>

</div>
</transition>
</template>
<script>
export default {
  name: "modal",
  data() {
    return {
      quest: [
        "Do a total of 120 calf raises throughout the day.",
        "Do 6 sets of 10 jumping jacks and side jacks at 30 second intervals with 1 minute rest in between each.",
        "Do 3 sets of 20 lunges with 20 second rests in between.",
        "Do 6 sets of 8 squats with 30 second rests in between."
      ]
    }
  },
  computed: {
    time: function() {
      var zone = moment().utcOffset();
      var time = moment.utc(this.created_at).utcOffset(zone);
      return time.format('HH:mm MMM Do') + ', ' + time.fromNow();     
    }
  },
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  position: relative;
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #78c2ad;
  color: #4aae9b;
  justify-content: center;
}

.modal-footer {
  border-top: 1px solid #78c2ad;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.75s ease;
}
</style>