import { h, Component } from 'preact';

export default class IoLogo extends Component {
	render({ rootPath }) {
		return (
			<img style="width: 38px; margin-left: 4px; margin-bottom: 32px;" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNTg2LjA5IDkzNC42Ij48ZGVmcz48c3R5bGU+LmNscy0xe2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aCk7fS5jbHMtMntmaWxsOm5vbmU7fS5jbHMtM3tmaWxsOnVybCgjcmFkaWFsLWdyYWRpZW50KTt9LmNscy00e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC0yKTt9LmNscy01e2ZpbGw6dXJsKCNyYWRpYWwtZ3JhZGllbnQtMik7fS5jbHMtNntmaWxsOiNmZmMxMDc7fS5jbHMtN3tmaWxsOiMwZjlkNTg7fS5jbHMtOHtvcGFjaXR5OjAuMjtpc29sYXRpb246aXNvbGF0ZTt9LmNscy05e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC0zKTt9LmNscy0xMHtmaWxsOiNiZjM2MGM7fS5jbHMtMTF7Y2xpcC1wYXRoOnVybCgjY2xpcC1wYXRoLTQpO30uY2xzLTEye2ZpbGw6IzI2MzIzODt9LmNscy0xM3tjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtNSk7fS5jbHMtMTR7ZmlsbDojZmZmO30uY2xzLTE1e2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC02KTt9LmNscy0xNnttYXNrOnVybCgjbWFzayk7fS5jbHMtMTd7ZmlsbDp1cmwoI3JhZGlhbC1ncmFkaWVudC0zKTt9LmNscy0xOHtjbGlwLXBhdGg6dXJsKCNjbGlwLXBhdGgtNyk7fS5jbHMtMTl7bWFzazp1cmwoI21hc2stMik7fS5jbHMtMjB7ZmlsbDp1cmwoI3JhZGlhbC1ncmFkaWVudC00KTt9LmNscy0yMXtmaWxsOiM0Mjg1ZjQ7fS5jbHMtMjJ7ZmlsbDojZGI0NDM3O30uY2xzLTIze2NsaXAtcGF0aDp1cmwoI2NsaXAtcGF0aC04KTt9LmNscy0yNHtmaWxsOiMxYTIzN2U7fTwvc3R5bGU+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSI0MzUuOTUgNzUwLjM4IDM1Ni4yMSA2MTIuNDYgMzM2LjY1IDY0Ni4yNiA0MzUuOTUgNzUwLjM4Ii8+PC9jbGlwUGF0aD48cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9Ii02MDIuMzYiIGN5PSIxMTg1LjIzIiByPSI3Ljk0IiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KDQ0LjI2LCAwLCAwLCAtNDQuMjYsIDI3MDk3LjE1LCA1MzIwOS43OSkiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiMzMzMiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNTA1MDUiLz48L3JhZGlhbEdyYWRpZW50PjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTIiPjxwb2x5Z29uIGNsYXNzPSJjbHMtMiIgcG9pbnRzPSIzMzYuNjUgNjQ2LjI2IDM1Ni4yMSA2MTIuNDYgMjcyLjI1IDQ2Ny4zIDIzMi4xNiA1MzYuNjYgMzM2LjY1IDY0Ni4yNiIvPjwvY2xpcFBhdGg+PHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQtMiIgY3g9Ii02MDIuNTMiIGN5PSIxMTg1LjQiIHI9IjcuMjkiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDQuNjIsIDAsIDAsIC00NC42MiwgMjczMjAuNTEsIDUzNjQ1LjE4KSIgeGxpbms6aHJlZj0iI3JhZGlhbC1ncmFkaWVudCIvPjxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoLTMiPjxyZWN0IGNsYXNzPSJjbHMtMiIgeD0iMTY5Ljg4IiB5PSI3NDYuNzMiIHdpZHRoPSIyNjYuMDciIGhlaWdodD0iMTg3Ljg2Ii8+PC9jbGlwUGF0aD48Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aC00Ij48cmVjdCBjbGFzcz0iY2xzLTIiIHg9IjEuOTQiIHk9IjkyNy4zIiB3aWR0aD0iMTcyLjE3IiBoZWlnaHQ9IjcuMyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtNSI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxLjk0IiB5PSI0NjcuMyIgd2lkdGg9IjI3Mi40MiIgaGVpZ2h0PSI0NjcuMyIvPjwvY2xpcFBhdGg+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtNiI+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjQzNS45NSA3NTAuMzggMzU2LjIxIDYxMi40NiAzMzYuNjUgNjQ2LjI2IDQzNS45NSA3NTAuMzgiLz48L2NsaXBQYXRoPjxtYXNrIGlkPSJtYXNrIiB4PSIzMzYuNjUiIHk9IjYxMi40NiIgd2lkdGg9Ijk5LjMiIGhlaWdodD0iMTM3LjkzIiBtYXNrVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48ZyBpZD0ibSI+PGcgY2xhc3M9ImNscy0xIj48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0zMzYuNjUsNjEyLjQ2SDQzNlY3NTAuMzhoLTk5LjNaIi8+PC9nPjwvZz48L21hc2s+PHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQtMyIgY3g9Ii02MDIuMzYiIGN5PSIxMTg1LjIyIiByPSI3LjMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDQuMjYsIDAsIDAsIC00NC4yNiwgMjcwOTcuMTIsIDUzMjA5Ljc2KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2JmMzYwYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2JmMzYwYyIvPjwvcmFkaWFsR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtNyI+PHBvbHlnb24gY2xhc3M9ImNscy0yIiBwb2ludHM9IjMzNi42NSA2NDYuMjYgMzU2LjIxIDYxMi40NiAyNzIuMjUgNDY3LjMgMjMyLjE2IDUzNi42NiAzMzYuNjUgNjQ2LjI2Ii8+PC9jbGlwUGF0aD48bWFzayBpZD0ibWFzay0yIiB4PSIyMzIuMTYiIHk9IjQ2Ny4zIiB3aWR0aD0iMTI0LjA1IiBoZWlnaHQ9IjE3OC45NyIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGcgaWQ9InMiPjxnIGNsYXNzPSJjbHMtNCI+PHBhdGggY2xhc3M9ImNscy01IiBkPSJNMjMyLjE2LDQ2Ny4zMWgxMjR2MTc5aC0xMjRaIi8+PC9nPjwvZz48L21hc2s+PHJhZGlhbEdyYWRpZW50IGlkPSJyYWRpYWwtZ3JhZGllbnQtNCIgY3g9Ii02MDIuNTMiIGN5PSIxMTg1LjM5IiByPSI3LjMiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoNDQuNjIsIDAsIDAsIC00NC42MiwgMjczMjAuNDcsIDUzNjQ1LjE1KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzI2MzIzOCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzI2MzIzOCIvPjwvcmFkaWFsR3JhZGllbnQ+PGNsaXBQYXRoIGlkPSJjbGlwLXBhdGgtOCI+PHJlY3QgY2xhc3M9ImNscy0yIiB4PSIxLjk0IiB3aWR0aD0iNTE3Ljk3IiBoZWlnaHQ9Ijc1MC4zOCIvPjwvY2xpcFBhdGg+PC9kZWZzPjx0aXRsZT5nZGc8L3RpdGxlPjxwYXRoIGNsYXNzPSJjbHMtNiIgZD0iTTQzMy44Myw3NDYuNzMsMzU2LjIxLDYxMi40NiwxNjkuODgsOTM0LjZIMzI5LjQyTDQzNiw3NTAuMzhaIi8+PHBhdGggY2xhc3M9ImNscy03IiBkPSJNMjcyLjI1LDQ2Ny4zbDg0LDE0NS4xNkwxNjkuODgsOTM0LjZIMS45NFoiLz48ZyBjbGFzcz0iY2xzLTgiPjxnIGNsYXNzPSJjbHMtOSI+PHBhdGggY2xhc3M9ImNscy0xMCIgZD0iTTMyOS40Miw5MjcuM0gxNzQuMTFsLTQuMjMsNy4zSDMyOS40Mkw0MzYsNzUwLjM4bC0yLjEyLTMuNjVaIi8+PC9nPjwvZz48ZyBjbGFzcz0iY2xzLTgiPjxnIGNsYXNzPSJjbHMtMTEiPjxwYXRoIGNsYXNzPSJjbHMtMTIiIGQ9Ik02LjE4LDkyNy4zbC00LjI0LDcuM0gxNjkuODhsNC4yMy03LjNaIi8+PC9nPjwvZz48ZyBjbGFzcz0iY2xzLTgiPjxnIGNsYXNzPSJjbHMtMTMiPjxwYXRoIGNsYXNzPSJjbHMtMTQiIGQ9Ik0xLjk0LDkzNC42SDYuMThMMjc0LjM2LDQ3MWwtMi4xMS0zLjY1WiIvPjwvZz48L2c+PGcgY2xhc3M9ImNscy0xNSI+PGcgY2xhc3M9ImNscy0xNiI+PHBhdGggY2xhc3M9ImNscy0xNyIgZD0iTTMzNi42NSw2MTIuNDZINDM2Vjc1MC4zOGgtOTkuM1oiLz48L2c+PC9nPjxnIGNsYXNzPSJjbHMtMTgiPjxnIGNsYXNzPSJjbHMtMTkiPjxwYXRoIGNsYXNzPSJjbHMtMjAiIGQ9Ik0yMzIuMTYsNDY3LjNoMTI0djE3OWgtMTI0WiIvPjwvZz48L2c+PHBhdGggY2xhc3M9ImNscy0yMSIgZD0iTTE2OS44OCwwSDEuOTRMNDM2LDc1MC4zOCw1MTkuODQsNjA1LjNsLjA3LS4xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTIyIiBkPSJNNTc0LjMxLDUxMS4xMWE4Ny4zOSw4Ny4zOSwwLDAsMCwwLTg3LjYyTDMyOS40MiwwSDE2OS44OGwzNTAsNjA1LjE1WiIvPjxnIGNsYXNzPSJjbHMtOCI+PGcgY2xhc3M9ImNscy0yMyI+PHBhdGggY2xhc3M9ImNscy0yNCIgZD0iTTUxOS45MSw2MDUuMTVsLTIuMTEtMy41N0w0MzYsNzQzLjA4LDYuMTgsMEgxLjk0TDQzNiw3NTAuMzgsNTE5Ljg0LDYwNS4zWiIvPjwvZz48L2c+PC9zdmc+" />
		);
	}
}