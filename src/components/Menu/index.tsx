import React, { useContext } from 'react'
import { Menu as UikitMenu, ConnectorId } from '@wdefifinancebsc/uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useGetPriceData from 'hooks/useGetPriceData'
import useGetBallanceOf from 'hooks/useGetBallanceOf'
import useGetTotalSupply from 'hooks/useGetTotalSupply'
import { injected, bsc, walletconnect } from 'connectors'
import { links } from './config'

const Menu: React.FC = (props) => {
  const { account, activate, deactivate } = useWeb3React()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const priceData = useGetPriceData()
  const mytokenbalance = useGetBallanceOf()
  const tokenbalance = mytokenbalance ? Math.round(Number(mytokenbalance))/10**9 : 0
  const mytokensupply = useGetTotalSupply()
  const tokensupply = mytokensupply
  // const cakePriceUsd = priceData ? Number(priceData.prices.cake) : undefined
  const cakePriceUsd = priceData ? Number(priceData.data.price) : undefined
  console.log("=====",tokensupply)
  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={(connectorId: ConnectorId) => {
        if (connectorId === 'walletconnect') {
          return activate(walletconnect)
        }

        if (connectorId === 'bsc') {
          return activate(bsc)
        }

        return activate(injected)
      }}
      logout={deactivate}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      kiwiPriceUsd={cakePriceUsd}
      tokenBalance={tokenbalance}
      tokenSupply={tokensupply|| ''}
      {...props}
    />
  )
}

export default Menu
