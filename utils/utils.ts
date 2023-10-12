import { BigNumber, ethers } from "ethers";

export const getUtcTimestamp = () => {
    let now = new Date();
    return (
      Date.UTC(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours(),
        now.getUTCMinutes(),
        now.getUTCSeconds(),
        now.getUTCMilliseconds()
      ) / 1000
    );
  };

export const setNewTime = (
    setCountdown: any,
    epochEnds: BigNumber | undefined
  ) => {
    if (epochEnds) {
      const currentTime = getUtcTimestamp();
      const countdownDate = epochEnds.toNumber();
  
      let distanceToDateInMilliseconds = (countdownDate - currentTime) * 1000;
      let daysLeft = Math.floor(
        distanceToDateInMilliseconds / (1000 * 60 * 60 * 24)
      );
      let hoursLeft = Math.floor(
        (distanceToDateInMilliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutesLeft = Math.floor(
        (distanceToDateInMilliseconds % (1000 * 60 * 60)) / (1000 * 60)
      );
      let secondsLeft = Math.floor(
        (distanceToDateInMilliseconds % (1000 * 60)) / 1000
      );
  
      setCountdown({
        days: daysLeft > 0 ? daysLeft : 0,
        hours: hoursLeft > 0 ? hoursLeft : 0,
        minutes: minutesLeft > 0 ? minutesLeft : 0,
        seconds: secondsLeft > 0 ? secondsLeft : 0,
      });
    }
  };

export const formatBigNumber = (number: BigNumber | undefined): string => {
  return (+ethers.utils.formatEther(number || 0)).toFixed(3);
};

export const formatBigNumberTwoDecimals = (number: BigNumber | undefined): string => {
  return (+ethers.utils.formatEther(number || 0)).toFixed(2);
};

export const formatUsdPrice = (
  usdPricePerCoin: string | undefined,
  coinAmount: BigNumber | undefined
): string => {
  return (
    parseFloat(usdPricePerCoin || "0") * parseFloat(formatBigNumber(coinAmount))
  ).toFixed(2);
};