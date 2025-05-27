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
  import type { IVue3TelephoneInput } from "vue3-telephone-input/IVue3TelephoneInput.ts";

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
  import type { IVue3TelephoneInput } from "vue3-telephone-input/IVue3TelephoneInput.ts";
  
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

### Customize the component style
#### If you need to change the color, size, border or background. You can override css variables.
```html
<script setup lang="ts">
  import "vue3-telephone-input/dist/vue3-telephone-input.css";
  
  // Create new css file
  import "@/path/to/custom/style.css";
</script>
```

#### For example:
```css
/* style.css file */

.vue3-telephone-input {
    
    /* Backgrounds */
    --bg-input: rgb(244, 246, 250);
    --bg-input-success: #f0fff0;
    --bg-input-error: rgb(255, 245, 245);

    /* Colors */
    --color-input-text: #2a2a2a;
    --color-input-success-text: #268f0d;
    --color-input-error-text: #c24f41;
    --color-input-border: #e3e3e3;

    /* Border radius */
    --border-radius-input: 6px;

    /* Padding */
    --padding-input: 2px 12px;
    
}
```

## License
Copyright (c) 2025 Egor Lentarev.
Released under the [MIT License](https://github.com/lentarev/vue3-telephone-input/blob/master/LICENSE).