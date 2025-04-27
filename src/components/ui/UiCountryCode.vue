<script setup lang="ts">
const props = defineProps({
  countryCode: { type: String, default: "" },
  isValid: { type: Boolean, default: undefined },
});
</script>

<template>
  <div class="country">
    <div
      :class="{
        country__w: true,
        country__w_valid: isValid === true,
        country__w_error: isValid === false,
      }"
    >
      <div class="country__w-code">
        {{ props.countryCode }}
      </div>
      <div class="country__w-plus">+</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.country {
  &__w {
    position: relative;
    display: flex;
  }

  &__w_valid {
    color: var(--color-input-success-text);
  }

  &__w_error {
    color: var(--color-input-error-text);
  }

  &__w-code {
    position: absolute;
    top: -6px;
    font-size: 10px;
    font-weight: 600;
  }

  &__w-plus {
    margin-right: 2px;
  }
}
</style>
