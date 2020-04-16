const prototypeEvent = {
  id: "11111",
  name: "Trenton Davis",
  avatarUrl: "https://www.fillmurray.com/173/151",
  description:
    "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",

  venueName: "Laffs Comedy Cafe",
  venueLocation: "Tuscon",
  showDates: [
    {
      day: "Wednesday, August 17th",
      times: "8:00 PM, 9:30 PM"
    },
    {
      day: "Thursday, August 18th",
      times: "8:00 PM, 9:30 PM"
    }
  ],
  ctaText: "TICKETS $12.50+"
};

let fakeEvents = [];
const NUM_FAKE_EVENTS = 30;
for (let i = 0; i < NUM_FAKE_EVENTS; ++i) {
  const clonedEvent = Object.assign({}, prototypeEvent);
  clonedEvent.id = i + 1;
  clonedEvent.name = `Sample ${i + 1}`;
  clonedEvent.avatarUrl = `https://www.fillmurray.com/173/${150 + i}`;

  // fake fields to prove sorting for now
  clonedEvent.distance = i;
  clonedEvent.price = NUM_FAKE_EVENTS - i;
  clonedEvent.popularity = i;

  fakeEvents.push(clonedEvent);
}
export default fakeEvents;

// export default [
//   {
//     id: "11111",
//     name: "Trenton Davis",
//     avatarUrl: "https://www.fillmurray.com/173/151",
//     description:
//       "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
//
//     venueName: "Laffs Comedy Cafe",
//     venueLocation: "Tuscon",
//     showDates: [
//       {
//         day: "Wednesday, August 17th",
//         times: "8:00 PM, 9:30 PM"
//       },
//       {
//         day: "Thursday, August 18th",
//         times: "8:00 PM, 9:30 PM"
//       }
//     ],
//     ctaText: "TICKETS $12.50+"
//   },
//   {
//     id: "2222",
//     name: "Peter Andrews",
//     avatarUrl: "https://www.fillmurray.com/173/154",
//     description:
//       "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
//
//     venueName: "Laffs Comedy Cafe",
//     venueLocation: "Tuscon",
//     showDates: [
//       {
//         day: "Wednesday, August 17th",
//         times: "8:00 PM, 9:30 PM"
//       },
//       {
//         day: "Thursday, August 18th",
//         times: "8:00 PM, 9:30 PM"
//       }
//     ],
//     ctaText: "TICKETS $12.50+"
//   },
//   {
//     id: "213213",
//     name: "Jim Davis",
//     avatarUrl: "https://www.fillmurray.com/173/152",
//     description:
//       "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
//     venueName: "Club Congress",
//     venueLocation: "Tuscon",
//     showDates: [
//       {
//         day: "Wednesday, August 17th",
//         times: "8:00 PM, 9:30 PM"
//       },
//       {
//         day: "Thursday, August 18th",
//         times: "8:00 PM, 9:30 PM"
//       }
//     ],
//     ctaText: "TICKETS $12.50+"
//   },
//   {
//     id: "4444",
//     name: "jerry Davis",
//     avatarUrl: "https://www.fillmurray.com/173/153",
//     description:
//       "Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.   Lorem ipsum dolor sit amet.  Lorem ipsum dolor sit amet.  ",
//     venueName: "Fox Theatre",
//     venueLocation: "Tuscon",
//     showDates: [
//       {
//         day: "Wednesday, August 17th",
//         times: "8:00 PM, 9:30 PM"
//       }
//     ],
//     ctaText: "TICKETS $12.50+"
//   }
// ];

export const fakeEventDetailsData = {
  name: "Frankie Quinones",
  imageUrl: "https://www.fillmurray.com/800/600",
  dateStart: "Saturday, August 17",
  dateEnd: "Sunday August 18",
  venue: {
    name: "Laffs Comedy Caffé",
    position: [32.2, -110.6],
    location: "Tucson, AZ",
    address: "2900 E Broadway Blvd, Tucson, AZ 85716",
    logoUrl: "https://i.picsum.photos/id/512/120/120.jpg",
    webUrl: "http://laffstuscon",
    phoneNumber: "(520) 323-8869"
  },
  showDates: [
    { date: "2020-08-17T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-18T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-19T15:00:27.87+00:20", ticketUrl: "/" },
    { date: "2020-08-20T15:00:27.87+00:20", ticketUrl: "/" }
  ],
  details: [
    "Ages 21+",
    "General Admission",
    "Doors open 30 min prior to show",
    "2 item minimum"
  ],
  descriptionText: [
    "After becoming an accomplished stand up comedian, Chappelle  debuted his own weekly sketch comedy show on Comedy Central called Chappelle's Show.",
    "In April 2007, Chappelle set a stand up endurance record at the Laugh Factory comedy club, beating comedian Dane Cook's record of three hours and 50 minutes."
  ],
  videoLink: "https://www.youtube.com/embed/D80NLUcixPg",
  performers: [
    {
      avatarUrl: "https://www.fillmurray.com/100/100",
      name: "Performer 1"
    },
    {
      avatarUrl: "https://www.fillmurray.com/100/102",
      name: "Performer 2"
    },
    {
      avatarUrl: "https://www.fillmurray.com/100/101",
      name: "Performer 3"
    }
  ],
  otherShows: [
    {
      image: "https://www.fillmurray.com/100/100",
      name: "James Brown",
      link: "#"
    },
    {
      image: "https://www.fillmurray.com/100/102",
      name: "Phil Murray",
      link: "#"
    },
    {
      image: "https://www.fillmurray.com/100/104",
      name: "Chris Brown",
      link: "#"
    },
    {
      image: "https://www.fillmurray.com/100/103",
      name: "Darius Rucker",
      link: "#"
    },
    {
      image: "https://www.fillmurray.com/100/101",
      name: "Gabriel Iglesias",
      link: "#"
    }
  ],
  socialLinks: {
    facebook: "http://facebook.com/asdfasdfasdfsd",
    twitter: "http://twitter.com/asdfasdfasdfasdfsadf",
    email: "foo@bar.com"
  }
};
