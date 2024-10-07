import uvicorn
import logging


def main():
    uvicorn.run(
        "src.init:asgi_app",
        host="127.0.0.1",
        port=5000,
        server_header=False,
        date_header=False,
        reload=True,
        log_level=logging.WARNING,
    )

    return 0


if __name__ == "__main__":
    exit(main())
