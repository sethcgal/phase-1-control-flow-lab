function scuberGreetingForFeet(distance){
  let response
    if (distance <= 400) {
      response = "This one is on me!"
      return response;
    } else if (distance <= 2499 && distance >=2000){
      response = "I will gladly take your thirty bucks."
      return response;
    } else if (distance >=2500){
      response = "No can do."
      return response;}
    }
function ternaryCheckCity(city){
  return (city == 'NYC') ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
      case 'not as generous':
        return 'Thank you.';
        break;
        case 'thanks for everything':
          return 'Bye.';
          break;
  }
  
}