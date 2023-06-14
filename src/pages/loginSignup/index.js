const LoginSignup = ({ shouldSignup, handleSubmit, user, handleField }) => {
  return (
    <div>
      <div className="xs:w-[90%] sm:w-[50%] md:w-[30%] m-auto mt-20">
        <h1 className="text-3xl text-center">
          {!shouldSignup ? 'Login' : 'Sign Up'}
        </h1>
        <form
          className="w-full flex flex-col items-center justify-center"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex flex-col space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
              name="email"
              value={user.email}
              onChange={handleField}
            />
            <p className="text-xs text-gray-500">
              {/* This is a helper text for the input field. */}
            </p>
          </div>
          <div className="w-full flex flex-col space-y-2">
            <label
              htmlFor="inputField"
              className="text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              id="Password"
              type="Password"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              name="password"
              value={user.password}
              onChange={handleField}
            />
            <p className="text-xs text-gray-500">
              {/* This is a helper text for the input field. */}
            </p>
          </div>
          {shouldSignup && (
            <div className="w-full flex flex-col space-y-2">
              <label
                htmlFor="inputField"
                className="text-sm font-medium text-gray-700"
              >
                Confirm Password:
              </label>
              <input
                id="confirmPassword"
                type="Password"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm Password"
                required
                name="confirmPassword"
                value={user.confirmPassword}
                onChange={handleField}
              />
              <p className="text-xs text-gray-500">
                {/* This is a helper text for the input field. */}
              </p>
            </div>
          )}
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginSignup;
