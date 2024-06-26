import { model, models, Schema } from "mongoose";

export interface IBeneficiary {
  id?: string;
  user: string;
  wallet: string;
  name: string;
}

const BeneficiarySchema = new Schema<IBeneficiary>(
  {
    user: { type: String, required: true, lowercase: true },
    wallet: { type: String, required: true, lowercase: true },
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      versionKey: false,
      virtuals: true,
      transform: (_, ret) => {
        delete ret._id;
      },
    },
  }
);

const Beneficiary =
  models.Beneficiary || model("Beneficiary", BeneficiarySchema);
export default Beneficiary;
