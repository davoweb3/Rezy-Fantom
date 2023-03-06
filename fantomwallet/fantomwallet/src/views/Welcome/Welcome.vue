<template>
    <div class="welcome-view">
        <div class="intro">
            <h1>Welcome to Rezy Wallet</h1>
            <h2>Blockchain based Recycling PoC based on Fantom</h2>
        </div>

        <div class="view-account-main">
            <div class="main-buttons v2 collapse-md">
              
                <router-link :to="{ name: 'create-account' }" class="btn create-account-btn large w100p">
                    <icon data="@/assets/svg/wallet.svg" width="32" height="32" :fill="false" aria-hidden="true" />
                    Create Wallet
                </router-link>
                <router-link :to="{ name: 'restore-account' }" class="btn restore-account-btn large w100p">
                    <icon data="@/assets/svg/key.svg" width="32" height="32" aria-hidden="true" />
                    Restore Wallet
                </router-link>
                <!--                <router-link :to="{ name: 'ledger-accounts' }" class="btn ledger-accounts-btn large w100p">
                    Ledger
                </router-link>-->
            </div>

            <installation-info />
            <account-list />
            <connect-wallet-window ref="connectWalletWindow" />
        </div>
    </div>
</template>

<script>
import AccountList from '../../components/AccountList/AccountList.vue';
import InstallationInfo from '../../components/InstallationInfo/InstallationInfo.vue';
import ConnectWalletWindow from '@/components/windows/ConnectWalletWindow/ConnectWalletWindow.vue';

// import {WEIToFTM} from "../utils/transactions.js";
export default {
    name: 'Welcome',

    components: {
        ConnectWalletWindow,
        InstallationInfo,
        AccountList,
    },

    methods: {
        onConnectWalletClick() {
            this.$refs.connectWalletWindow.show();
        },
    },
};
</script>

<style lang="scss">
@import 'style';
</style>
