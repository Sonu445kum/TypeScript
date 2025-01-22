// here we use enum
enum Color {
    Red = 1,
    Green = 2,
    Blue = 3,
    // Add more colors as needed
  }
  // here we use object
  function getColorName(color: Color): string {
    switch (color) {
      case Color.Red:
        return 'Red';
      case Color.Green:
        return 'Green';
      case Color.Blue:
        return 'Blue';
      // Add more cases for other colors as needed
      default:
        return 'Unknown';
    }
  }
  // here we are calling function with enum value
  console.log(getColorName(Color.Red)); // Outputs: Red
  console.log(getColorName(Color.Green)); // Outputs: Green
  console.log(getColorName(Color.Blue)); // Outputs: Blue
  