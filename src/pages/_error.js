function ErrorPage() {
  return <>Error</>;
}

export function getInitialProps(context) {
  const { err } = context;

  if (err) {
    // sentry.captureException(err, context);
    const statusCode = err.statusCode || 500;
    return { statusCode, err };
  }
}

export default ErrorPage;
