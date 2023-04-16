import moment from "moment";

export const dateTimeFormat = (datetime) => {
  if (datetime) return moment(datetime).format("MMMM Do YYYY, h:mm a");
  return "";
};
export const getFoodName = (donation) => {
  let value = null;
  if (donation.chapti_quantity > 0) {
    value = `Chapti (${donation.chapti_quantity} pic)`;
  }
  if (donation.dry_bhaji > 0) {
    value = value
      ? value + `, Dry Bhaji (${donation.dry_bhaji} kg)`
      : `Dry Bhaji (${donation.dry_bhaji} kg)`;
  }
  if (donation.wet_bhaji > 0) {
    value = value
      ? value + `, Wet Bhaji (${donation.wet_bhaji} kg)`
      : `Wet Bhaji (${donation.wet_bhaji} kg)`;
  }
  if (donation.rice > 0) {
    value = value
      ? value + `, Rice (${donation.rice} kg)`
      : `Rice (${donation.rice} kg)`;
  }
  console.log("value", value);
  return value;
};
