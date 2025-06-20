const projects = [
  {
    id: "1",
    title: "Sample Videos",
    location: "Pune, MH",
    orders: 6,
    lastOrder: "10/01/2023",
    stats: { maps: 0, images: 0, panos: 5, virtualTours: 0, videos: 37 },
    images: ["/static/images/sample1.png", "/static/images/sample2.png"],
    videos: ["/static/images/SampleVideo2.mp4"],
    coordinates: [73.8567, 18.5204],
  },
  {
    id: "2",
    title: "Demo Project",
    location: "Mumbai, MH",
    orders: 2,
    lastOrder: "02/01/2023",
    stats: { maps: 1, images: 3, panos: 0, virtualTours: 0, videos: 5 },
    images: ["/static/images/sample2.png"],
    videos: ["/static/images/SampleVideo1.mp4"],
    coordinates: [72.8777, 19.076],
  },
  {
    id: "3",
    title: "Client Demo",
    location: "Delhi",
    orders: 5,
    lastOrder: "01/01/2023",
    stats: { maps: 0, images: 22, panos: 15, virtualTours: 0, videos: 86 },
    images: ["/static/images/sample3.png"],
    videos: ["/static/images/SampleVideo2.mp4"],
    coordinates: [77.209, 28.6139],
  },
];

export default projects;
