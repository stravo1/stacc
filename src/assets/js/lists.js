const tags = [
  {
    label: "Basic",
    value: "basic",
    categories: "Importance",
  },
  {
    label: "Important",
    value: "important",
    categories: "Importance",
  },
  {
    label: "Urgent",
    value: "urgent",
    categories: "Importance",
  },
  {
    label: "Personal",
    value: "personal",
    categories: "Type",
  },
  {
    label: "Work",
    value: "work",
    categories: "Type",
  },
];

const color = [
  {
    label: "Green",
    value: "green",
    hex:"#4ceed0",
    categories: "color",
  },
  {
    label: "Yellow",
    value: "yellow",
    hex:"#F2BF06",
    categories: "color",
  },
  {
    label: "Red",
    value: "red",
    hex:"#f4815d",
    categories: "color",
  },
  {
    label: "Blue",
    value: "blue",
    hex:"#00D5FC",
    categories: "color",
  },
  {
    label: "Violet",
    value: "violet",
    hex:"#BB99FF",
    categories: "color",
  },
];

const colorMap = {
  green: "#4ceed0",
  yellow: "#F2BF06",
  blue: "#00D5FC",
  red: "#f4815d",
  violet: "#BB99FF",
};

const titleMap = {
  daily: "today's",
  weekly: "week's",
  monthly: "month's",
}
export {
    tags,
    color,
    colorMap,
    titleMap,
}