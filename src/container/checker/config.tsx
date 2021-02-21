import Modal from "../../component/Modal";
import showFiles from "./showFiles";
import ShowFilesModal from "./showFiles";
import ShowForksModal from "./showForks";

export const ShowFilesColumn = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Created By",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Update By",
    dataIndex: "updated_at",
    key: "updated_at",
  },
];

export const CheckerTableColumn = [
  {
    title: "Id",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Owner UserName",
    dataIndex: "name",
    key: "name",
    render: (text: any, row: any) => {
      return <span>{row.owner.login}</span>;
    },
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Created By",
    dataIndex: "created_at",
    key: "created_at",
  },
  {
    title: "Update By",
    dataIndex: "updated_at",
    key: "updated_at",
  },
  {
    title: "View Files",
    dataIndex: "files",
    key: "files",
    render: (text: any, row: any) => {
      return (
        <div>
          <button
            onClick={() => {
              ShowFiles(Object.values(row.files));
            }}
          >
            Show Files
          </button>
        </div>
      );
    },
  },
  {
    title: "View Forks",
    dataIndex: "forks",
    key: "forks",
    render: (text: any, row: any) => {
      return (
        <div>
          <button
            onClick={() => {
              ShowForks(row.id);
            }}
          >
            Show Folks
          </button>
        </div>
      );
    },
  },
];

export function getGistDataByUserNameURL(userName: string) {
  return `https://api.github.com/users/${userName}/gists`;
}

export function getGistDataURL(id: string) {
  return `https://api.github.com/gists/${id}/forks`;
}

function ShowFiles(data: Array<any>) {
  Modal.info({
    title: "This is a notification message",
    content: <ShowFilesModal data={data} loading={false} />,
    onOk() {},
    centered: true,
    width: "90%",
  });
}

function ShowForks(id: string) {
  Modal.info({
    title: "This is a notification message",
    content: <ShowForksModal id={id} />,
    onOk() {},
    centered: true,
    width: "90%",
  });
}
