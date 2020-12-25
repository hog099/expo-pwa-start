import 'react-native-gesture-handler';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();


// import DefaultLayout from '../../pages/_layouts/defaultLayout/index';
import DefaultLayout02 from '../pages/_layouts/defaultLayout02/index';

import ErrorConection from '../pages/components/default/ErroConection/index';
import PolicyPrivacy from '../pages/auth/termsofuse/index';

// import AccountConfigUser from '../../pages/app/account/user/index';
import AccountConfigUser from '../pages/components/default/ErroConection/index';

export const ProfileStackNavigator = ({ navigation, route }) => {

    if (route.state) {
        navigation.setOptions({
            tabBarVisible: route.state.index > 0 ? false : true
            // tabBarVisible: false
        });
    }

    const userLogged = useSelector(state => state.auth.user);

    if (userLogged.type == '1' || userLogged.type == '0') {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AccountConfigUser" component={props => <DefaultLayout02><AccountConfigUser {...props} /></DefaultLayout02>} />
                {/* <Stack.Screen name="EditProfileUser" component={props => <DefaultLayout02><EditProfileUser {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ChangeEmail" component={props => <DefaultLayout02><ChangeEmail {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ChangePassword" component={props => <DefaultLayout02><ChangePassword {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ChangeServer" component={props => <DefaultLayout02><ChangeServer {...props} /></DefaultLayout02>} />
                <Stack.Screen name="PointsUser" component={props => <DefaultLayout02><PointsUser {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ScanQrCodePoints" component={props => <DefaultLayout02><ScanQrCodePoints {...props} /></DefaultLayout02>} />
                <Stack.Screen name="PointsExtractUser" component={props => <DefaultLayout02><PointsExtractUser {...props} /></DefaultLayout02>} />
                <Stack.Screen name="PainelMaster" component={props => <DefaultLayout02><PainelMaster {...props} /></DefaultLayout02>} /> */}

                <Stack.Screen name="PolicyPrivacy" component={PolicyPrivacy} />
                <Stack.Screen name="ErrorConection" component={ErrorConection} />
            </Stack.Navigator>
        );

    } else if (userLogged.type == '2') {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {/* <Stack.Screen name="AccountConfigCompany" component={props => <DefaultLayout02><AccountConfigCompany {...props} /></DefaultLayout02>} /> */}
                {/* <Stack.Screen name="EditProfileCompany" component={props => <DefaultLayout02><EditProfileCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ChangeEmail" component={props => <DefaultLayout02><ChangeEmail {...props} /></DefaultLayout02>} />
                <Stack.Screen name="ChangePassword" component={props => <DefaultLayout02><ChangePassword {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditOpenHoursCompany" component={props => <DefaultLayout02><EditOpenHoursCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyDeliveryRate" component={props => <DefaultLayout02><CompanyDeliveryRate {...props} /></DefaultLayout02>} />
                <Stack.Screen name="AddDeliveryRateCompany" component={props => <DefaultLayout02><AddDeliveryRateCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditDeliveryRateCompany" component={props => <DefaultLayout02><EditDeliveryRateCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyPayments" component={props => <DefaultLayout02><CompanyPayments {...props} /></DefaultLayout02>} />
                <Stack.Screen name="AddPaymentCompany" component={props => <DefaultLayout02><AddPaymentCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditPaymentCompany" component={props => <DefaultLayout02><EditPaymentCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditCoverImageCompany" component={props => <DefaultLayout02><EditCoverImageCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditAdCompany" component={props => <DefaultLayout02><EditAdCompany {...props} /></DefaultLayout02>} />

                <Stack.Screen name="CompanyCategoryProduct" component={props => <DefaultLayout02><CompanyCategoryProduct {...props} /></DefaultLayout02>} />
                <Stack.Screen name="AddCategoryProductCompany" component={props => <DefaultLayout02><AddCategoryProductCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditCategoryProductCompany" component={props => <DefaultLayout02><EditCategoryProductCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyProduct" component={props => <DefaultLayout02><CompanyProduct {...props} /></DefaultLayout02>} />
                <Stack.Screen name="AddProductCompany" component={props => <DefaultLayout02><AddProductCompany {...props} /></DefaultLayout02>} />
                <Stack.Screen name="EditCompanyProduct" component={props => <DefaultLayout02><EditCompanyProduct {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyImagesProducts" component={props => <DefaultLayout02><CompanyImagesProducts {...props} /></DefaultLayout02>} />

                <Stack.Screen name="CompanyPoints" component={props => <DefaultLayout02><CompanyPoints {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyPointsConfig" component={props => <DefaultLayout02><CompanyPointsConfig {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompamnyMovimentPoints" component={props => <DefaultLayout02><CompamnyMovimentPoints {...props} /></DefaultLayout02>} />
                <Stack.Screen name="CompanyCountingClientPoints" component={props => <DefaultLayout02><CompanyCountingClientPoints {...props} /></DefaultLayout02>} />
                <Stack.Screen name="PushNotification" component={props => <DefaultLayout02><PushNotification {...props} /></DefaultLayout02>} />
                <Stack.Screen name="SendFormPushNotification" component={props => <DefaultLayout02><SendFormPushNotification {...props} /></DefaultLayout02>} />
                <Stack.Screen name="LocalizationCompany" component={props => <DefaultLayout02><LocalizationCompany {...props} /></DefaultLayout02>} />
                 */}


                <Stack.Screen name="PolicyPrivacy" component={PolicyPrivacy} />
                <Stack.Screen name="ErrorConection" component={ErrorConection} />
            </Stack.Navigator>
        );

    }

};

