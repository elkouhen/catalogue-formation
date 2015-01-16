package com.softeam.formations.springconfig;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.servlet.configuration.EnableWebMvcSecurity;
import org.springframework.security.oauth2.config.annotation.configurers.ClientDetailsServiceConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configuration.AuthorizationServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableAuthorizationServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.security.oauth2.config.annotation.web.configurers.AuthorizationServerEndpointsConfigurer;
import org.springframework.security.oauth2.config.annotation.web.configurers.ResourceServerSecurityConfigurer;

@Configuration
@EnableWebMvcSecurity ( )
@EnableGlobalMethodSecurity (securedEnabled = true)
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Configuration
    @EnableResourceServer
    protected static class ResourceServer extends ResourceServerConfigurerAdapter {

        @Override
        public void configure(HttpSecurity http) throws Exception {
            // @formatter:off
            http
                    .requestMatchers().antMatchers("/", "/admin/beans").and()
                    .authorizeRequests()
                    .anyRequest().access("#oauth2.hasScope('read')");
            // @formatter:on
        }

        @Override
        public void configure(ResourceServerSecurityConfigurer resources) throws Exception {
            resources.resourceId("formations");
        }
    }

    @Configuration
    @EnableAuthorizationServer
    protected static class OAuth2Config extends AuthorizationServerConfigurerAdapter {

        @Autowired
        private AuthenticationManager authenticationManager;

        @Override
        public void configure(AuthorizationServerEndpointsConfigurer endpoints) throws Exception {
            endpoints.authenticationManager(authenticationManager);
        }

        @Override
        public void configure(ClientDetailsServiceConfigurer clients) throws Exception {
            // @formatter:off
            clients.inMemory()
                    .withClient("my-trusted-client")
                    .authorizedGrantTypes("password", "authorization_code", "refresh_token", "implicit")
                    .authorities("ROLE_CLIENT", "ROLE_TRUSTED_CLIENT")
                    .scopes("read", "write", "trust")
                    .resourceIds("formations")
                    .accessTokenValiditySeconds(60)
                    .and()
                    .withClient("my-client-with-registered-redirect")
                    .authorizedGrantTypes("authorization_code")
                    .authorities("ROLE_CLIENT")
                    .scopes("read", "trust")
                    .resourceIds("formations")
                    .redirectUris("http://localhost:3000")
                    .secret("my-client-with-registered-redirect-secret")
                    .and()
                    .withClient("my-client-with-secret")
                    .authorizedGrantTypes("client_credentials", "password")
                    .authorities("ROLE_CLIENT")
                    .scopes("read")
                    .resourceIds("formations")
                    .secret("secret");
            // @formatter:on
        }
    }

    @Configuration
    protected static class AuthenticationManagerConfiguration extends GlobalAuthenticationConfigurerAdapter {

        @Override
        public void init(AuthenticationManagerBuilder auth) throws Exception {
            auth.inMemoryAuthentication().withUser("user1").password("password1").roles("USER", "ADMIN");
        }
    }
}