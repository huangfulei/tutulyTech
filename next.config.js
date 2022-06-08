/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  // access to firebase storage
  images: {
    domains: ["firebasestorage.googleapis.com"],
    loader: "imgix",
    path: "",
  },
};
