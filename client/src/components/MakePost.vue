<template>
<transition name="modal-fade">
<div class="modal-backdrop">
<div class="modal">
    <header class="modal-header">
        <slot class="header d-flex justify-content-between">
            <h1>Make A Post</h1> &nbsp; &nbsp;
            <i class="fa fa-times-circle clickable" @click="close"></i>
        </slot>
        </header>
        <div class="modal-body">
        <slot class="body">
            <div class="mw">
             <form>
               <div class="form-group">
                 <input type="text" class="form-control mt-1 mb-1" placeholder="Delicious Cucumber"/>
                  <textarea type="text" class="form-control mt-1 mb-1" placeholder="I ate A Ton Of Cucumbers"></textarea>
                  <button class="btn btn-secondary mt-1 mb-1 btn-sm" >Post</button>
               </div>
            </form>
            </div>
        </slot>
        </div>
    </div>

</div>
</transition>
</template>
<script>
export default {
  name: "modal",

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
  max-width: 40%;
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
.clickable:hover {
  cursor: pointer;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.75s ease;
}
</style>