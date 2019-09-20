let auditModel;

module.exports = (mongoose) => {
  if (!auditModel && mongoose) {
    // console.log(mongoose.models, 'from site');
    const auditSchema = new mongoose.Schema({
      itemName: {
        type: String,
        required: true
      },
      itemId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
      },
      changes: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
      },
      user: {
        type: String,
        required: true,
      }
    }, { timestamps: true });
    auditModel = mongoose.model('Audit', auditSchema);
  }
  return auditModel;
};
