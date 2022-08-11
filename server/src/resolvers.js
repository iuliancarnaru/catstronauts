export const resolvers = {
  Query: {
    // get all tracks, will be used to populate the homepage grid of our web client
    tracksForHome: (parent, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTracksForHome();
    },

    // get a single track by id, for the Track page
    track: (parent, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getTrack(id);
    },

    module: (parent, { id }, { dataSources }, info) => {
      return dataSources.trackAPI.getModule(id);
    },
  },

  Mutation: {
    incrementTrackViews: async (parent, { id }, { dataSources }, info) => {
      try {
        const track = await dataSources.trackAPI.incrementTrackViews(id);
        return {
          code: 200,
          success: true,
          message: `Successfully incremented number of views for track ${id}`,
          track,
        };
      } catch (err) {
        return {
          code: err.extensions.response.status,
          success: false,
          message: err.extensions.response.body,
          track: null,
        };
      }
    },
  },

  Track: {
    author: ({ authorId }, args, { dataSources }, info) => {
      return dataSources.trackAPI.getAuthor(authorId);
    },

    // resolver chains
    modules: ({ id }, args, { dataSources }, info) => {
      return dataSources.trackAPI.getTrackModules(id);
    },

    // taking care of new filed in Track
    durationInSeconds: ({ length }) => length
  },

  Module: {
    // taking care of new filed in Module
    durationInSeconds: ({ length }) => length
  }
};
