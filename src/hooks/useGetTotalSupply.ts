import { BigNumber } from '@ethersproject/bignumber'
import { NEVER_RELOAD, useSingleCallResult } from '../state/multicall/hooks'
import { useTokenContract } from './useContract'
import { isAddress } from '../utils'


const useGetTotalSupply = () => {
  const address = isAddress('0xea084e4ccCACfB860cD381Df761dfB0b39559705')
  const tokenContract = useTokenContract(address || undefined, false)
  // const totalSupply = useSingleCallResult(tokenContract, 'totalSupply', undefined, NEVER_RELOAD)
  const totalSupply: BigNumber = useSingleCallResult(tokenContract, 'totalSupply')?.result?.[0]
  return totalSupply ? totalSupply.toString() : undefined
}

export default useGetTotalSupply
