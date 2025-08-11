# checkly-support-inquiry-1


## Checkly CLI

### Environment Variable Management

#### List Environment Variables

```sh
npx checkly env ls
```

#### Add Environment Variable

```sh
npx checkly env add <VARIABLE_NAME> <value>
```

#### Example Usage

```sh
# List current environment variables
npx checkly env ls
# Output: No environment variables found.

# Add a new environment variable
npx checkly env add TEST_ENV_VAR foo
# Output: Environment variable TEST_ENV_VAR added.

# Verify the variable was added
npx checkly env ls
# Output: Environment variables:
# TEST_ENV_VAR=foo
```

#### run test suite through Checkly

```sh
npx checkly pw-test
```

#### Inject env file from command line

```sh
npx checkly pw-test --env-file=".env.local-checkly"
```

#### Add check for different environments

```sh
npx checkly pw-test --create-check -- --grep @dev
npx checkly pw-test --create-check -- --grep @test
```