<template>
  <div>
    This will be a card.
  </div>
</template>

<script>
import Theme from "../../z.theme";
const { Card } = Theme.elements;
export default {
  computed: {
    cardWrapClasses() {
      const {
        themeDisabled,
        className,
        $utils,
        removeClass,
        status,
        variant,
        events
      } = this;
      const { wrap } = Card;

      if (themeDisabled) return className || null;

      return $utils
        .filterClasses(
          $utils.themeClasses(wrap, status, variant, events),
          removeClass
        )
        .concat(className);
    }
  }
};
</script>

<style>
</style>