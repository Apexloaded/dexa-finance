import { model, models, Schema } from "mongoose";

export interface IAuth {
  wallet: string;
  nonce: string;
  txCount: number;
  lastTxDate: Date;
}

const AuthSchema = new Schema<IAuth>(
  {
    wallet: { type: String, required: true, lowercase: true, unique: true },
    nonce: { type: String },
    txCount: { type: Number },
    lastTxDate: { type: Date },
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

const Auth = models.Auth || model("Auth", AuthSchema);
export default Auth;
