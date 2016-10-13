<ion-view id="index">
    <ion-content overflow-scroll="true" padding="false" scroll="true">
        
        <div class="row no-padding logoDiv">
            <div class="col no-padding center">
                <img src="img/ionic.png" class="logo" alt="logo" />
            </div>
        </div>
        
        <div class="row contentDiv">
            <div class="col">
                <ion-scroll direction="y" class="formDiv" style="height: 100%;">
                    <div class="row no-padding loginDiv" ng-if="display === 'login'">
                        <div class="col no-padding">
                            <div class="list">
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Email</span>
                                    <input type="text" placeholder="Email" ng-model="loginData.email">
                                </label>
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Password</span>
                                    <input type="text" placeholder="Password" ng-model="loginData.password">
                                </label>
                                <button ng-click="doLogin()" class="button button-stable button-clear button-full">
                                    LOGIN
                                </button>
                                <a class="facebook-sign-in button button-block" ng-click="facebookSignIn()">Login with Facebook</a>
                            </div>   
                        </div>
                    </div>
                    <div class="row no-padding registerDiv" ng-if="display === 'register'">
                        <div class="col no-padding">
                            <div class="list">
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Full name</span>
                                    <input type="text" placeholder="Full name" ng-model="registerData.fullname">
                                </label>
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Email</span>
                                    <input type="text" placeholder="Email" ng-model="registerData.email">
                                </label>
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Password</span>
                                    <input type="text" placeholder="Password" ng-model="registerData.password">
                                </label>
                                <label class="item item-input item-floating-label">
                                    <span class="input-label">Repeat Password</span>
                                    <input type="text" placeholder="Repeat Password" ng-model="registerData.rPassword">
                                </label>
                                <button ng-click="doRegister()" class="button button-stable button-clear button-full">
                                    REGISTER
                                </button>
                            </div>   
                        </div>
                    </div>
                </ion-scroll>
            </div>
        </div>

        <div class="row no-padding buttonDiv">
            <div class="col no-padding">
                <button ng-click="doUser('login')" class="button button-full button-positive">
                    LOGIN
                </button>
            </div>
            <div class="col no-padding">
                <button ng-click="doUser('register')" class="button button-full button-balanced">
                    REGISTER
                </button>
            </div>
        </div>

    </ion-content>
</ion-view>