<template>
  <div id="about">
    <button id="about-btn" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <div id="info-icon">
        <IconInfoCircle />
      </div>
      <span id="about-btn__span">About the project</span>
    </button>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              About the project
            </h1>
          </div>
          <div class="modal-body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam error quis nesciunt molestiae praesentium
            illo ratione facere, veniam dicta explicabo temporibus ducimus
          </div>
          
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">
              How to play
            </h1>
          </div>
          <div class="modal-body">
            1. Quisquam error quis nesciunt molestiae praesentium <br>
            2. Quisquam error quis nesciunt molestiae praesentium<br>
            3. Quisquam error quis nesciunt molestiae praesentium
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import IconInfoCircle from './icons/IconInfoCircle.vue'
</script>
  
<style>

</style>