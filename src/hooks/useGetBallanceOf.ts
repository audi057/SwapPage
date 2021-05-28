import { NEVER_RELOAD, useSingleCallResult } from '../state/multicall/hooks'
import { useActiveWeb3React } from './index'
import { useTokenContract } from './useContract'
import { isAddress } from '../utils'

const useGetBallanceOf = () => {
    const { account } = useActiveWeb3React()
    
    const address = isAddress('0xea084e4ccCACfB860cD381Df761dfB0b39559705')
    const tokenContract = useTokenContract(address || undefined, false)
    const ballaceof = useSingleCallResult(tokenContract, 'balanceOf',  [account ?? undefined], NEVER_RELOAD)?.result?.[0]
    return ballaceof
}

export default useGetBallanceOf
