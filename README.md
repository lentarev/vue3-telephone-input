# vue3-telephone-input
International Telephone Input with Vue 3

## Getting started
### Install the component:
```angular2html
npm install --save vue3-telephone-input
```

### Use the component directly:

#### Options API
```html
<template>
  <div>
    <!-- PHONE INPUT -->
    <vue3-telephone-input placeholder="Your phone number" v-model="phone" />
  </div>
</template>

<script lang="ts">
  import "vue3-telephone-input/dist/vue3-telephone-input.css";
  import Vue3TelephoneInput from "vue3-telephone-input";
  import { IVue3TelephoneInput } from "vue3-telephone-input/types/interfaces/IVue3TelephoneInput";

  export default defineComponent({
    name: "FormLogin",
    components: { Vue3TelephoneInput },
    
    data() {
      return {
        // Phone
        phone: {
          phoneNumber: "",
          isValid: undefined,
        } as IVue3TelephoneInput,
      }
    }
  });
</script>
```

#### Composition API
```html
<script setup lang="ts">
  import "vue3-telephone-input/dist/vue3-telephone-input.css";
  import Vue3TelephoneInput from "vue3-telephone-input";
  import { IVue3TelephoneInput } from "vue3-telephone-input/types/interfaces/IVue3TelephoneInput";
  
  const phone: IVue3TelephoneInput = reactive({
    phoneNumber: "",
    isValid: undefined,
  });
</script>

<template>
  <div>
    <!-- PHONE INPUT -->
    <vue3-telephone-input placeholder="Your phone number" v-model="phone" />
  </div>
</template>
```