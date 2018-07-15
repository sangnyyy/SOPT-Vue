export const original = {
  data() {
    return {
      color: "black"
    };
  },
  computed: {
    containerStyle: {
      set: function(color) {
        this.color = color;
      },
      get: function() {
        let style = {
          fontSize: "30px",
          color: "red",
          width: "100px",
          height: "100px",
          backgroundColor: this.color
        };
        return style;
      }
    }
  }
};
