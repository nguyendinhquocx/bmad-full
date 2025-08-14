# @ndq/bmad-vn

BMad Method CLI tool - Vietnamese version for rapid software development with AI agents

## Giới thiệu

BMad Method là phương pháp phát triển phần mềm sử dụng 7 AI agents chuyên môn để tạo ra sản phẩm chất lượng cao một cách nhanh chóng và có hệ thống.

## Cài đặt

Không cần cài đặt global, sử dụng trực tiếp với npx:

```bash
npx @ndq/bmad-vn create my-project
```

## Cách sử dụng

### Tạo dự án mới

```bash
npx @ndq/bmad-vn create my-awesome-project
cd my-awesome-project
claude
/analyst
```

### Khởi tạo trong thư mục hiện tại

```bash
npx @ndq/bmad-vn init
claude
/analyst
```

## Quy trình BMad Method

1. **Analyst** (`/analyst`) - Phân tích yêu cầu, tạo PRD
2. **PM** (`/pm`) - Chia nhỏ thành stories  
3. **UX Expert** (`/ux-expert`) - Thiết kế wireframes
4. **Architect** (`/architect`) - Thiết kế kiến trúc hệ thống
5. **Developer** (`/dev`) - Code thực tế
6. **QA** (`/qa`) - Review và test code

## Cấu trúc dự án được tạo

```
my-project/
├── .claude/                    # Claude commands & agents
│   ├── commands/BMad/agents/   # 7 AI agents
│   └── settings.local.json     # Claude settings
├── .bmad-core/                 # BMad core system
│   ├── tasks/                  # Executable workflows
│   ├── templates/              # Document templates
│   └── checklists/             # Quality checklists
└── README.md                   # Hướng dẫn tiếng Việt
```

Khi agents chạy sẽ tự tạo:
```
├── docs/                       # Documents từ agents
│   ├── prd.md                  # Product Requirements
│   ├── architecture.md         # System Architecture
│   └── wireframes/             # UI mockups
└── stories/                    # User stories
    ├── story-1.md
    └── story-2.md
```

## Ví dụ workflow

```bash
# 1. Tạo dự án
npx @ndq/bmad-vn create todo-app

# 2. Bắt đầu với Analyst
cd todo-app
claude
/analyst

# 3. Theo thứ tự agents
/pm
/ux-expert
/architect
/dev
/qa
```

## Đặc điểm

- ✅ Hoàn toàn bằng tiếng Việt
- ✅ 7 AI agents chuyên môn
- ✅ Document-driven development
- ✅ Context persistence
- ✅ Agile workflow
- ✅ Quality assurance tự động

## Yêu cầu

- Node.js >= 16
- Claude Code CLI
- Git (tùy chọn)

## Hỗ trợ

- GitHub: https://github.com/ndq/bmad-vn
- Issues: https://github.com/ndq/bmad-vn/issues

## License

MIT

---

**Tác giả:** NDQ  
**Version:** 1.0.0