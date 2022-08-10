export const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, args, context, info) => {
      return context.dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by id, for the Track page
    track: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(args.id);
    },

    module: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getModule(args.id);
    },
  },
  Track: {
    author: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(parent.authorId);
    },

    // resolver chains
    modules: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTrackModules(parent.id);
    },
  },
};
