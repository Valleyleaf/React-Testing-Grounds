

const handleButtonClick = (buttonNumber) => {

    const Namedbuttons = [
        'Alpha',
        'Beta',
        'Charlie',
        'Delta',
        'Echo',
        'Foxtrot',
    ]

    var button = document.getElementById(Namedbuttons);

    console.log(`Button ${buttonNumber}, ${Namedbuttons[buttonNumber]} clicked!`);
  }

  export default handleButtonClick;