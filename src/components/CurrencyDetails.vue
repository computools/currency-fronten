<template>
  <div>
    <div class="block-popup-bg"></div>
    <div class="block-popup">
      <div class="btn-close" @click="changeShowBlock"></div>
      <template v-if="currencyById.name"> 
        <h3>Detail info</h3>
        <p><span>id:</span>{{currencyById.id}}</p>
        <p><span>name:</span>{{currencyById.name}}</p>
        <p><span>code:</span>{{currencyById.code}}</p>
        <p><span>rate:</span>{{currencyById.rate}}</p>
      </template>
      <div v-else>
        <h4>loading...</h4>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyDetails',
  props: {
    currencyId: {
      type: [Number, String],
      required: true,
      default: 0
    }
  },
  computed: {
    currencyById() {
      return this.$store.state.currencyDetails[this.currencyId] || {};
    }
  },
  methods: {    
    changeShowBlock() {
      this.$emit('changeShowBlock', false);
    }
  }
}
</script>
