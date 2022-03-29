/// <reference types="react-scripts" />

export interface ChartData {
  date: string;
  value: number;
}

export interface CryptoList {
  data: CryptoDetail[];
  max_pages: number;
}

export interface CryptoDetail {
  active: boolean;
  antiWhale?: string;
  aprDaily: number;
  aprWeekly: number;
  aprYearly: number;
  apyYearly?: number;
  asset: string;
  assetAddress?: string;
  assetId: string;
  assetLockup?: boolean;
  assetPopupMessage?: any;
  assetPrice?: number;
  auditInfo?: string;
  blockchain: string;
  category?: any;
  collateralLockPeriod?: any;
  d_active_reason?: any;
  dateAdded?: string;
  dateEnding?: any;
  dateStarted?: any;
  dateUpdated: string;
  daysRemaining?: any;
  depositFee?: string;
  exchangeName?: string;
  exchangePicture?: any;
  exchangeUrl?: string;
  exchangeVersion?: any;
  farm: string;
  farmId: string;
  farmImage?: any;
  farmName?: string;
  farmType?: any;
  feeAprYearly?: number;
  harvestLockup?: boolean;
  harvestLockupInfo?: string;
  impermanentLoss?: any;
  impermanentLoss30d?: any;
  info?: any;
  investmentLink?: string;
  manuallyCalculatedAPR?: boolean;
  maxPoolCap?: any;
  multiplier?: any;
  nativeToken?: any;
  nativeTokenAddress?: any;
  nativeTokenInvestLink?: any;
  nativeTokenMarketCap?: number;
  nativeTokenPrice?: number;
  new_asset?: boolean;
  otherFees?: any;
  otherPoolEconomicsInfo?: any;
  pid?: number;
  poolAlreadyFilled?: boolean;
  priceCorrelation_30d?: any;
  rewardTokenA?: string;
  rewardTokenAAddress?: any;
  rewardTokenAAprYearly?: number;
  rewardTokenAAprYearlyMaxBoosted?: number;
  rewardTokenAPrice?: number;
  rewardTokenAWeeklyAmount?: number;
  rewardTokenAWeeklyDollarAmount?: number;
  rewardTokenB?: string;
  rewardTokenBAddress?: any;
  rewardTokenBAprYearly?: number;
  rewardTokenBAprYearlyMaxBoosted?: number;
  rewardTokenBPrice?: number;
  rewardTokenBWeeklyAmount?: number;
  rewardTokenBWeeklyDollarAmount?: number;
  scam?: boolean;
  scamInfo?: any;
  selected_farm: Selectedfarm[];
  stakingAddress?: any;
  stakingLink: string;
  status?: string;
  tokenA?: string;
  tokenAAddress?: any;
  tokenABacking?: number;
  tokenAHolders?: number;
  tokenAHoldersHistory?: TvlStakedHistory[];
  tokenAPicture?: any;
  tokenAPrice?: number;
  tokenAPriceHistory?: TvlStakedHistory[];
  tokenB?: string;
  tokenBAddress?: any;
  tokenBBacking?: number;
  tokenBHolders?: number;
  tokenBPicture?: any;
  tokenBPrice?: number;
  tokenC?: string;
  tokenCAddress?: any;
  tokenCBacking?: number;
  tokenCHolders?: number;
  tokenCPicture?: any;
  tokenCPrice?: number;
  tokenD?: any;
  tokenDAddress?: any;
  tokenDBacking?: number;
  tokenDHolders?: number;
  tokenDPicture?: any;
  tokenDPrice?: number;
  tokenE?: any;
  tokenEAddress?: any;
  tokenEBacking?: number;
  tokenEHolders?: number;
  tokenEPicture?: any;
  tokenEPrice?: number;
  transferTax?: boolean;
  transferTaxInfo?: string;
  tvlChange24h?: string;
  tvlChange24hValue?: number;
  tvlExchange: number | string;
  tvlFarm?: number;
  tvlStaked: number;
  underlyingFarm?: any;
  url?: string;
  vaultAddress?: any;
  volume_24h?: any;
  weight?: any;
  withdrawalFee?: string;
  yearlyTokenRewardPool?: number;
  yieldType: string;
  dataQuality?: boolean;
  validated?: boolean;
  otherPoolEconomicsInfos?: string;
}

export interface Selectedfarm {
  _locks?: string[];
  active: boolean;
  blockchain: string;
  dateAdded: string;
  dateUpdated: string;
  farmId: string;
  farmName: string;
  farmType: string;
  lastFullUpdate: string;
  scam: boolean;
  scamInfo?: string;
  tvlChange24h: string;
  tvlChange24hValue: number;
  tvlStaked: number;
  tvlStakedHistory: TvlStakedHistory[];
  riskLevel?: string;
  validated?: boolean;
}

export interface TvlStakedHistory {
  date: string;
  value: number;
}
