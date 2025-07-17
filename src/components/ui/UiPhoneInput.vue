<script setup lang="ts">
import parsePhoneNumberFromString from "libphonenumber-js";
import { useFormatPhoneNumber } from "@/components/utils/formatPhoneNumber.ts";
import { computed, type ComputedRef, type Ref, ref } from "vue";

// Define props
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string | undefined;
  }>(),
  {
    modelValue: () => {
      return "";
    },

    placeholder: () => {
      return "";
    },
  },
);

// Define emits
const emit = defineEmits(["update:modelValue", "details"]);

// Define refs
const formatedNumber = ref("");
const isValid: Ref<boolean | undefined> = ref();

/**
 * Computed
 */
const cModelValue: ComputedRef<string> = computed(() => {
  const inputValue = props?.modelValue;

  if (inputValue !== undefined) {
    const clearedInput = inputValue.replace(/[\s\D]+/g, "");
    const phoneNumber = clearedInput.slice(0, 16);
    const pfn = parsePhoneNumberFromString("+" + phoneNumber);

    formatedNumber!.value = useFormatPhoneNumber(phoneNumber, pfn?.countryCallingCode);
    isValid!.value = pfn?.isValid();

    emit("update:modelValue", phoneNumber);
    emit("details", pfn);
  }

  return props.modelValue;
});

/**
 * Handling the input event.
 * @param e
 */
const onInputValue = (e: Event) => {
  const inputValue = (e.target as HTMLInputElement).value;
  const clearedInput = inputValue.replace(/[\s\D]+/g, "");
  const phoneNumber = clearedInput.slice(0, 16);
  const pfn = parsePhoneNumberFromString("+" + phoneNumber);

  formatedNumber.value = useFormatPhoneNumber(phoneNumber, pfn?.countryCallingCode);

  isValid.value = pfn?.isValid();

  emit("update:modelValue", phoneNumber);
  emit("details", pfn);
};
</script>

<template>
  <div class="phone">
    <div v-show="false">
      {{ cModelValue }}
    </div>
    <input
      :class="{ phone__input: true, phone__input_valid: isValid === true, phone__input_error: isValid === false }"
      :placeholder="props.placeholder"
      @input="onInputValue"
      v-model="formatedNumber"
    />
  </div>
</template>

<style lang="scss" scoped>
.phone {
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 8px 0;

  &__input {
    flex-grow: 1;
    background-color: var(--bg-input);
    border: 1px solid var(--bg-input);
    color: var(--color-input-text);
    font-size: 16px;
  }

  &__input:focus {
    outline: 0 solid transparent;
  }

  &__input::placeholder {
    font-size: 16px;
  }

  &__input_valid {
    background: var(--bg-input-success);
    border: 1px solid var(--bg-input-success);
    color: var(--color-input-success-text);
  }

  &__input_error {
    background: var(--bg-input-error);
    border: 1px solid var(--bg-input-error);
    color: var(--color-input-error-text);
  }
}
</style>
