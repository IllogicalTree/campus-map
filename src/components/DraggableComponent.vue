<template>
  <g
    id="container"
    :transform="`translate(${modelValue.x},${modelValue.y})`"
    @pointerdown.left="start"
    @pointerup="end" @pointercancel="end"
    @pointermove="dragging ? move($event) : null"
    @touchstart.prevent="" @dragstart.prevent=""
    :class="{dragging}"
   >
    <slot/>
  </g>
</template>

<script setup>  
  import {ref} from 'vue';
  
  function convertPixelToSvgCoord(event, el=event.currentTarget) {
    const svg = el.ownerSVGElement;
    let p = svg.createSVGPoint();
    p.x = event.clientX;
    p.y = event.clientY;
    p = p.matrixTransform(svg.getScreenCTM().inverse());
    return p;
}

  const props = defineProps({
    modelValue: Object
  });
  
  const emit = defineEmits(['update:modelValue'])

  const dragging = ref();

  function start(event) {
    if (event.ctrlKey) return;
    let {x, y} = convertPixelToSvgCoord(event);
    dragging.value = {dx: props.modelValue.x - x, dy: props.modelValue.y - y};
    event.currentTarget.setPointerCapture(event.pointerId);
  }

  function end() {
    dragging.value = null;
  }

  function move(event) {
    let {x, y} = convertPixelToSvgCoord(event);
    emit('update:modelValue', {
      x: x + dragging.value.dx,
      y: y + dragging.value.dy,
    });
  }
</script>

<style scoped>
  g { cursor: grab; }
  g.dragging { user-select: none; cursor: grabbing; }
</style>
