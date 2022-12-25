import avatar1 from "../Images/Avatar-1.gif";
import avatar2 from "../Images/Avatar-2.gif";
import avatar3 from "../Images/Avatar-3.gif";
import avatar4 from "../Images/Avatar-4.gif";
import noAvatar from "../Images/no-avatar.gif";

export const getAvatarImage = (index) => {
  switch (index) {
    case 1:
      return avatar1;
    case 2:
      return avatar2;
    case 3:
      return avatar3;
    case 4:
      return avatar4;
    default:
      return noAvatar;
  }
};
