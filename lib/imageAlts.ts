export const imageAltTemplates = {
  heroVideo: 'Video background showing luxury builder floor construction and modern residential finishes',
  testimonialPhoto: (name: string, project: string, location: string) =>
    `Photo of ${name}, a client who purchased a ${project} in ${location}`,
  cityBanner: (city: string) => `Premium builder floor projects in ${city} with modern luxury residential design`,
  projectCard: (title: string) => `Image of ${title} builder floor project`,
  brochureCover: (city: string) => `Brochure cover for independent builder floor projects in ${city}`
};
