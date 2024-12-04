import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Image, 
    StyleSheet, 
    ScrollView, 
    Alert, 
    ActivityIndicator 
} from 'react-native';

const LoginScreen = () => {
    const [mobileNumber, setMobileNumber] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [rememberMe, setRememberMe] = useState<boolean>(false);
    const [validationMessage, setValidationMessage] = useState<string>('');

    const handleLogin = () => {
        setValidationMessage('');

        // Basic form validation
        if (!mobileNumber || mobileNumber.length !== 10) {
            setValidationMessage('Enter a valid 10-digit mobile number.');
            return;
        }
        if (!password) {
            setValidationMessage('Password cannot be empty.');
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            Alert.alert('Login Successful', 'Welcome back!');
        }, 1000);
    };

    const handleSocialLogin = (platform: string) => {
        Alert.alert(`${platform} Login`, 'Social login functionality coming soon!');
    };

    const toggleRememberMe = () => {
        setRememberMe(!rememberMe);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Welcome Back</Text>
            <Image 
                source={require('/Users/swapnil/ExpenseTracker/src/icons/app_icon.png')} // Ensure the correct relative path
                style={styles.logo} 
                accessibilityLabel="App Icon" 
            />

            <TextInput
                style={styles.input}
                placeholder="Mobile Number"
                keyboardType="number-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
                accessibilityLabel="Mobile Number Input"
            />

            <View style={styles.passwordContainer}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                    accessibilityLabel="Password Input"
                />
                <TouchableOpacity 
                    onPress={() => setShowPassword(!showPassword)}
                    accessibilityRole="button"
                    accessibilityLabel="Toggle Password Visibility">
                    <Text style={styles.showPasswordText}>
                        {showPassword ? 'Hide' : 'Show'}
                    </Text>
                </TouchableOpacity>
            </View>

            {validationMessage ? (
                <Text style={styles.validationMessage}>{validationMessage}</Text>
            ) : null}

            <View style={styles.toggleContainer}>
                <TouchableOpacity onPress={toggleRememberMe} accessibilityRole="button">
                    <Text style={styles.rememberMeText}>
                        {rememberMe ? '☑ Remember Me' : '☐ Remember Me'}
                    </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity 
                disabled={isLoading} 
                onPress={handleLogin} 
                style={styles.loginButton}
                accessibilityRole="button">
                {isLoading ? (
                    <ActivityIndicator color="#fff" />
                ) : (
                    <Text style={styles.loginButtonText}>Login</Text>
                )}
            </TouchableOpacity>

            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>

            <View style={styles.socialButtonsContainer}>
                <TouchableOpacity 
                    style={[styles.socialButton, { backgroundColor: '#3b5998' }]}
                    onPress={() => handleSocialLogin('Facebook')}
                    accessibilityRole="button">
                    <Text style={styles.socialButtonText}>Login with Facebook</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.socialButton, { backgroundColor: '#000' }]}
                    onPress={() => handleSocialLogin('Apple')}
                    accessibilityRole="button">
                    <Text style={styles.socialButtonText}>Login with Apple</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[styles.socialButton, { backgroundColor: '#db4437' }]}
                    onPress={() => handleSocialLogin('Google')}
                    accessibilityRole="button">
                    <Text style={styles.socialButtonText}>Login with Google</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#ff4500',
        marginTop: 50,
    },
    logo: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginVertical: 20,
    },
    input: {
        width: '100%',
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    passwordContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    showPasswordText: {
        color: 'gray',
        marginLeft: 10,
    },
    validationMessage: {
        color: 'red',
        marginBottom: 10,
    },
    toggleContainer: {
        alignSelf: 'flex-start',
        marginBottom: 20,
    },
    rememberMeText: {
        fontSize: 16,
        color: 'gray',
    },
    loginButton: {
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ff4500',
        marginVertical: 20,
    },
    loginButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordText: {
        color: '#ff4500',
        fontWeight: 'bold',
        marginBottom: 20,
    },
    socialButtonsContainer: {
        width: '100%',
        marginBottom: 20,
    },
    socialButton: {
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    socialButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default LoginScreen;
