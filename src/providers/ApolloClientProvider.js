import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


const API_KEY = process.env.EXPO_PUBLIC_STEPZEN_API_KEY


const client = new ApolloClient({
    uri: 'https://pueainoi.stepzen.net/api/geared-cow/__graphql',
    headers: {
        Authorization: `apikey ${API_KEY}`,
    },
    cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }) => {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;