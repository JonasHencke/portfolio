import ReactMarkdown from "react-markdown";
import "./Markdown.css";

const content = `
## Keep. Support

### Common questions

#### Do I need an account to use the app?

No, you can use the app without creating an account.

#### Why do you need access to my photos?

The app needs access to your photos to allow you sort and manage them. We do not store or share your photos with anyone. Your photos are only used locally on your device.

#### Why is my disk space not being freed up after deleting photos?

To ensure that your photos are not permanently deleted immediately, the app moves deleted photos to a "Recently Deleted" folder. This allows you to recover photos if you accidentally delete them. Photos in the "Recently Deleted" folder will be permanently deleted after 30 days, or you can manually empty the folder to free up disk space immediately.

#### I found a bug or have a feature request.

If you found a bug or have a feature request, please let us know by sending an email to henckejonas@gmail.com. We appreciate your feedback and will do our best to address any issues or consider your suggestions for future updates.

### Contact
If you have any other questions or need further assistance, please feel free to contact us at henckejonas@gmail.com
`;

export default function Support() {
  return (
    <main className="markdown">
      <ReactMarkdown>{content}</ReactMarkdown>
    </main>
  );
}
