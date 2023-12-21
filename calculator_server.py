import grpc
import calculator_pb2
import calculator_pb2_grpc
from concurrent import futures


class CalculatorServicer(calculator_pb2_grpc.CalculatorServicer):
    def Calculate(self, request, context):
        num1 = request.num1
        num2 = request.num2
        operator = request.operator


        if operator == "+":
            result = num1 + num2
        elif operator == "-":
            result = num1 - num2
        elif operator == "*":
            result = num1 * num2
        elif operator == "/":
            if num2 == 0:
                return calculator_pb2.Response(result=float('inf'))
            result = num1 / num2
        else:
            return calculator_pb2.Response(result=0.0)  # Invalid operator


        return calculator_pb2.Response(result=result)


def serve():
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    calculator_pb2_grpc.add_CalculatorServicer_to_server(CalculatorServicer(), server)
    server.add_insecure_port('localhost:50051')
    server.start()


    print("Server started. Listening on port 50051...")
    server.wait_for_termination()


if __name__ == '__main__':
    try:
        serve()
    except Exception as e:
        print(f"An exception occurred: {str(e)}")
