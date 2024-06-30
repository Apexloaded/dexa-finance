export enum Sessions {
  ACCESS_TOKEN = "dexa-pay.token",
  IS_WELCOME = "dexa-pay.welcome",
  AUTH_USER = "dexa-pay.auth_user",
}

export enum StorageTypes {
  DEXA_HIDE_BAL = "dexa-pay.hide.balance",
}

export enum ContractError {
  ERROR_INVALID_STRING = "Dexa: 0",
  ERROR_UNAUTHORISED_ACCESS = "Dexa: 1",
  ERROR_DUPLICATE_RESOURCE = "Dexa: 2",
  ERROR_NOT_FOUND = "Dexa: 3",
  ERROR_INVALID_PRICE = "Dexa: 4",
  ERROR_PROCESS_FAILED = "Dexa: 5",
  ERROR_EXPIRED_RESOURCE = "Dexa: 6",
}

export enum RequestType {
  Wallet = "0",
  Email = "1",
}

export enum RequestStatus {
  Pending = "0",
  Rejected = "1",
  Fulfilled = "2",
}

export enum SocketEvents {
  PaymentRequested = "payment.requested",
  PaymentSent = "payment.sent",
  PaymentClaimed = "payment.claimed",
}
