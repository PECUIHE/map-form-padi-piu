
interface ErrorHandlerProps {
    message: string;
  }
  
  const ErrorHandler: React.FC<ErrorHandlerProps> = ({ message }) => (
    <div className="p-4 text-red-500">
      {message}
    </div>
  );
  
  export default ErrorHandler;
