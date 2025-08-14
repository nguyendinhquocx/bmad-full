# BMad Method - Hướng Dẫn Toàn Diện Bằng Tiếng Việt

> **Phương pháp phát triển phần mềm hiện đại với sự hỗ trợ của 7 chuyên gia AI**

## **Mục Lục**

- [Section 1: Tổng Quan BMad Method](#section-1-tổng-quan-bmad-method)
- [Section 2: Workflow Từ Ý Tưởng đến Sản Phẩm](#section-2-workflow-từ-ý-tưởng-đến-sản-phẩm)  
- [Section 3: Các Tình Huống Thực Tế](#section-3-các-tình-huống-thực-tế)
- [Section 4: Hướng Dẫn Từng Bước Chi Tiết](#section-4-hướng-dẫn-từng-bước-chi-tiết)
- [Section 5: Ví Dụ Thực Tế - Xây Dựng Todo App](#section-5-ví-dụ-thực-tế---xây-dựng-todo-app)

---

## **Section 1: Tổng Quan BMad Method**

### **BMad Method là gì?**

BMad Method là một phương pháp phát triển phần mềm kết hợp:

- **Agile principles** - Phát triển linh hoạt theo từng giai đoạn nhỏ
- **7 AI agents chuyên nghiệp** - Mỗi agent phụ trách một công việc cụ thể
- **Document-driven development** - Tất cả thông tin được lưu trong tài liệu
- **Context persistence** - Agents nhớ được công việc dù bạn tắt máy

### **Tại sao nên dùng BMad Method?**

**Ưu điểm so với cách làm thông thường:**

1. **Có quy trình rõ ràng** - Không bị lạc hướng, biết làm gì tiếp theo
2. **Mỗi agent chuyên về một việc** - Chất lượng cao, không bị lẫn lộn
3. **Kết quả đồng nhất** - Dùng templates chuẩn, không bị sai lệch
4. **Nhớ được context** - Agent biết bạn đang làm gì dù tắt máy
5. **Có quality assurance** - Luôn có người review code trước khi hoàn thành

**So sánh với các cách khác:**

| **Đặc điểm** | **BMad Method** | **AI thông thường** | **Làm thủ công** |
|------------|-----------------|---------------------|------------------|
| **Quy trình** | Có cấu trúc rõ ràng | Tùy hứng | Tùy kinh nghiệm |
| **Chất lượng** | Đồng nhất | Không ổn định | Tùy người |
| **Nhớ context** | Lưu trong file | Quên khi tắt | Phải ghi chép |
| **Phân công** | Rõ ràng từng vai trò | Một AI làm hết | Một người làm hết |

### **Khi nào nên dùng BMad Method?**

**Nên dùng khi:**
- Dự án mất từ 3 tuần trở lên
- Cần tài liệu chi tiết để bảo trì sau này
- Làm việc nhóm hoặc cần maintain lâu dài  
- Muốn code chất lượng cao
- Dự án có khả năng mở rộng sau này

**Không cần dùng khi:**
- Làm prototype nhanh trong vài ngày
- Script đơn giản một lần dùng
- Học code cá nhân
- Chỉ cần chứng minh ý tưởng

### **7 Chuyên Gia AI Trong Team**

**Analyst - Cô Mai:** Chuyên nghiên cứu
- Nghiên cứu thị trường, phân tích đối thủ
- Brainstorming ý tưởng
- Tạo project brief từ ý tưởng ban đầu

**Product Manager - Anh Huy:** Quản lý sản phẩm  
- Tạo PRD (Product Requirements Document)
- Định nghĩa tính năng và yêu cầu
- Lập kế hoạch phát triển

**UX Expert - Chị Lan:** Thiết kế trải nghiệm
- Thiết kế giao diện người dùng
- Tạo wireframe và user flow
- Tối ưu trải nghiệm người dùng

**Scrum Master - Anh Minh:** Quản lý quy trình
- Tạo user stories từ PRD
- Lập kế hoạch sprint
- Quản lý backlog

**Product Owner - Chị Linh:** Kiểm tra chất lượng
- Validate tài liệu và stories
- Chia nhỏ tài liệu lớn
- Đảm bảo tính nhất quán

**Developer - Anh Tuấn:** Lập trình viên
- Code tính năng theo user stories
- Viết test cases
- Debug và fix lỗi

**QA Engineer - Anh Quang:** Kiểm tra chất lượng code
- Review code như senior developer
- Refactor code để tốt hơn
- Đảm bảo coding standards

---

## **Section 2: Workflow Từ Ý Tưởng đến Sản Phẩm**

### **Quy trình 2 giai đoạn**

BMad Method chia làm 2 giai đoạn chính:

**Giai đoạn 1: Lập Kế Hoạch (Planning)**
- Nghiên cứu ý tưởng
- Tạo tài liệu yêu cầu
- Thiết kế hệ thống
- Chuẩn bị user stories

**Giai đoạn 2: Phát Triển (Development)**  
- Code từng tính năng
- Test và review
- Deploy sản phẩm

### **Giai đoạn 1: Lập Kế Hoạch**

**Bước 1: Nghiên cứu ý tưởng (30-60 phút)**
```
Ý tưởng → /analyst → Project Brief
```
- **Input:** Ý tưởng ban đầu của bạn
- **Công việc:** Nghiên cứu thị trường, phân tích đối thủ
- **Output:** Tài liệu mô tả dự án (Project Brief)

**Bước 2: Tạo yêu cầu sản phẩm (1-2 tiếng)**
```
Project Brief → /pm → PRD Complete
```
- **Input:** Project Brief từ bước 1
- **Công việc:** Tạo PRD với tính năng, yêu cầu kỹ thuật, user stories
- **Output:** Product Requirements Document

**Bước 3: Thiết kế UX (1-3 tiếng, tùy chọn)**
```
PRD → /ux-expert → UI/UX Specifications
```
- **Input:** Yêu cầu từ PRD
- **Công việc:** Thiết kế giao diện, wireframe, user flow
- **Output:** Tài liệu thiết kế frontend

**Bước 4: Thiết kế hệ thống (1-2 tiếng)**
```
PRD + UX Specs → /architect → Architecture Document
```  
- **Input:** PRD và tài liệu UX
- **Công việc:** Chọn công nghệ, thiết kế database, API
- **Output:** Tài liệu kiến trúc hệ thống

**Bước 5: Kiểm tra và chuẩn bị (30 phút)**
```
All Documents → /po → Ready for Development
```
- **Input:** Tất cả tài liệu từ các bước trước
- **Công việc:** Kiểm tra tính đầy đủ, chia nhỏ tài liệu
- **Output:** Tài liệu sẵn sàng để code

### **Giai đoạn 2: Phát Triển**

**Chu trình lặp lại cho từng tính năng:**

**Bước 1: Tạo User Story**
```
PRD → /sm → Detailed User Story
```
- Anh Minh đọc PRD và tạo story chi tiết
- Mỗi story bao gồm: mô tả, acceptance criteria, tasks

**Bước 2: Kiểm tra Story**
```
Draft Story → /po → Validated Story  
```
- Chị Linh kiểm tra story có đủ thông tin không
- Đảm bảo story phù hợp với PRD

**Bước 3: Lập trình**
```
Validated Story → /dev → Working Code + Tests
```
- Anh Tuấn đọc story và code từng task
- Viết test cases và chạy thử
- Cập nhật tiến độ vào story file

**Bước 4: Review chất lượng**
```
Completed Code → /qa → Production Ready
```
- Anh Quang review code như senior
- Refactor code để tốt hơn
- Đảm bảo coding standards

**Lặp lại chu trình này cho đến khi hoàn thành tất cả tính năng**

### **Ước tính thời gian**

**Dự án nhỏ (1-2 tính năng):**
- Lập kế hoạch: 2-4 tiếng
- Phát triển: 1-2 tuần  
- Tổng cộng: 1-2 tuần

**Dự án trung bình (5-10 tính năng):**
- Lập kế hoạch: 4-8 tiếng
- Phát triển: 3-6 tuần
- Tổng cộng: 1-2 tháng

**Dự án lớn (20+ tính năng):**
- Lập kế hoạch: 1-2 ngày
- Phát triển: 2-6 tháng  
- Tổng cộng: 3-6 tháng

---

## **Section 3: Các Tình Huống Thực Tế**

### **Tình huống 1: Làm dự án mới từ đầu**

**Khi nào:** Bạn có ý tưởng mới, chưa có code gì

**Quy trình:**
```
Ý tưởng → Nghiên cứu → Tạo PRD → Thiết kế UX → Kiến trúc → Code → Deploy
```

**Các lệnh cần dùng:**
```bash
# Bước 1: Nghiên cứu ý tưởng
/analyst
*create-project-brief

# Bước 2: Tạo PRD
/pm  
*create-prd

# Bước 3: Thiết kế UX (nếu cần)
/ux-expert
*create-front-end-spec

# Bước 4: Thiết kế hệ thống  
/architect
*create-architecture

# Bước 5: Chuẩn bị development
/po
*execute-checklist-po
*shard-doc docs/prd.md docs/prd
*shard-doc docs/architecture.md docs/architecture

# Bước 6: Chu trình development
/sm → *draft (tạo stories)
/dev → *develop-story (code) 
/qa → *review (kiểm tra)
```

**Thời gian:** Lập kế hoạch 4-8 tiếng, phát triển tùy scope

### **Tình huống 2: Nâng cấp dự án có sẵn**

**Khi nào:** Bạn có app/website rồi, muốn thêm tính năng

**Đặc điểm:**
- Code đã có sẵn  
- Kiến trúc đã định hình
- Cần tích hợp với hệ thống hiện tại

**Quy trình:**
```
App hiện tại → Phân tích → Tạo epic mới → Code → Deploy
```

**Các lệnh cần dùng:**
```bash
# Bước 1: Phân tích hệ thống hiện tại
/analyst
*document-project

# Bước 2: Tạo epic cho tính năng mới
/pm
*create-brownfield-epic

# Bước 3: Kiểm tra tính khả thi
/po  
*validate-story-draft

# Bước 4: Development
/sm → *draft
/dev → *develop-story  
/qa → *review
```

**Thời gian:** Nhanh hơn làm mới 20-50%

### **Tình huống 3: Sửa lỗi và bảo trì**

**Khi nào:** App có bug cần fix hoặc cần tối ưu performance

**Quy trình:**
```
Bug report → Tạo story sửa lỗi → Code fix → Review → Deploy
```

**Các lệnh cần dùng:**
```bash
# Bước 1: Tạo story mô tả bug
/sm
*draft  # Mô tả bug và cách fix

# Bước 2: Code fix
/dev
*develop-story  # Fix lỗi và viết test

# Bước 3: Review kỹ lưỡng  
/qa
*review  # Đảm bảo fix không gây lỗi khác
```

**Thời gian:** Bug đơn giản 2-4 tiếng, phức tạp 1-3 ngày

### **Tình huống 4: Cải tiến tính năng**

**Khi nào:** Muốn làm tính năng hiện tại tốt hơn hoặc tăng performance

**Quy trình:**  
```
Phân tích hiện trạng → Lập kế hoạch cải tiến → Code → Deploy
```

**Các lệnh cần dùng:**
```bash
# Bước 1: Phân tích tình trạng hiện tại
/analyst  
*brainstorm "cải tiến tính năng X"

# Bước 2: Lập kế hoạch cải tiến
/pm
*create-brownfield-story

# Bước 3: Thực hiện cải tiến
/dev
*develop-story

# Bước 4: Kiểm tra hiệu quả
/qa
*review  # Đảm bảo cải tiến đạt mục tiêu
```

**Thời gian:** Cải tiến nhỏ 4-8 tiếng, lớn 1-2 tuần

### **Tình huống 5: Phát triển liên tục**

**Khi nào:** Dự án dài hạn với nhiều releases theo kế hoạch

**Chu trình hàng tháng:**
```
Sprint planning → Development → QA → Release → Retrospective
```

**Quy trình chi tiết:**
```bash  
# Tuần 1: Lập kế hoạch sprint
/po → *execute-checklist-po
/sm → *draft  # Tạo nhiều stories cho sprint

# Tuần 2-3: Development
/dev → *develop-story  # Story 1
/qa → *review
/dev → *develop-story  # Story 2  
/qa → *review

# Tuần 4: Release và tổng kết
/po → validation và documentation
Deploy lên production
/sm → retrospective và plan sprint tiếp
```

**Lợi ích:** 
- Tiến độ đều đặn có thể dự đoán
- Chất lượng được cải thiện liên tục
- Feedback thường xuyên từ user
- Nhịp độ phát triển bền vững

---

## **Section 4: Hướng Dẫn Từng Bước Chi Tiết**

### **Bắt đầu sử dụng BMad Method**

**Bước 1: Cài đặt**
```bash  
# Tạo project mới
mkdir du-an-cua-toi
cd du-an-cua-toi

# Cài đặt BMad Method
npx bmad-method install

# Hoặc copy từ project có sẵn
cp -r /path/to/bmad-project/.bmad-core .
cp -r /path/to/bmad-project/.claude .
```

**Bước 2: Kiểm tra cài đặt**
```bash
# Test các agent có hoạt động không
/analyst  # Phải hiện "Xin chào! Tôi là Cô Mai..."
*exit

/pm       # Phải hiện "Xin chào! Tôi là Anh Huy..."
*exit
```

**Bước 3: Cấu hình project**
```bash
# Chỉnh sửa config chính
nano .bmad-core/core-config.yaml

# Tùy chỉnh technical preferences
nano .bmad-core/data/technical-preferences.md
```

### **Các lệnh cơ bản theo từng agent**

**Analyst - Cô Mai (Nghiên cứu):**

Để vào chế độ Analyst:
```bash
/analyst
```

Các lệnh có thể dùng:
```bash
*help                           # Hiện tất cả lệnh có sẵn
*create-project-brief          # Tạo tài liệu mô tả dự án từ ý tưởng
*perform-market-research       # Nghiên cứu thị trường cho sản phẩm
*create-competitor-analysis    # Phân tích các đối thủ cạnh tranh  
*brainstorm "chủ đề"          # Brainstorming về chủ đề cụ thể
*research-prompt "chủ đề"     # Tạo câu hỏi nghiên cứu sâu
*exit                         # Thoát khỏi chế độ Analyst
```

**Ví dụ sử dụng:**
```bash
/analyst
*brainstorm "app todo có AI"
# Cô Mai sẽ hướng dẫn brainstorming session
# Kết quả: Danh sách tính năng, user personas, cơ hội thị trường

*create-project-brief
# Quy trình tương tác tạo project brief  
# Kết quả: File docs/project-brief.md
```

**Product Manager - Anh Huy (Quản lý sản phẩm):**

Để vào chế độ PM:
```bash
/pm
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*create-prd                   # Tạo Product Requirements Document
*create-brownfield-prd        # Tạo PRD cho dự án có sẵn
*shard-prd                    # Chia PRD thành nhiều file nhỏ
*create-epic                  # Tạo epic mới
*create-story                 # Tạo user story
*correct-course               # Điều chỉnh hướng dự án
*yolo                         # Bật chế độ nhanh (bỏ qua confirmations)
*exit                         # Thoát khỏi chế độ PM
```

**Ví dụ sử dụng:**  
```bash
/pm
*create-prd
# Quy trình tương tác tạo PRD
# Hỏi về mục tiêu, yêu cầu, tính năng
# Kết quả: File docs/prd.md

*shard-prd  
# Chia PRD thành nhiều file nhỏ
# Kết quả: docs/prd/goals.md, docs/prd/features.md, v.v.
```

**UX Expert - Chị Lan (Thiết kế UX):**

Để vào chế độ UX Expert:
```bash
/ux-expert
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*create-front-end-spec        # Tạo tài liệu thiết kế frontend
*generate-ui-prompt           # Tạo prompts cho AI tạo UI
*exit                         # Thoát khỏi chế độ UX Expert
```

**Ví dụ sử dụng:**
```bash
/ux-expert
*create-front-end-spec
# Quy trình thiết kế UX tương tác
# Kết quả: docs/frontend-spec.md với wireframes, user flows

*generate-ui-prompt
# Tạo prompts tối ưu cho v0.dev hoặc Lovable
# Kết quả: Prompts chất lượng cao cho AI tạo UI
```

**Scrum Master - Anh Minh (Quản lý quy trình):**

Để vào chế độ Scrum Master:
```bash
/sm
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*draft                        # Tạo user story tiếp theo từ epic
*correct-course               # Điều chỉnh hướng dự án
*story-checklist             # Kiểm tra chất lượng story
*exit                         # Thoát khỏi chế độ SM
```

**Ví dụ sử dụng:**
```bash
/sm
*draft
# Đọc PRD và architecture
# Tạo user story chi tiết với acceptance criteria
# Kết quả: docs/stories/story-1-1.md
```

**Product Owner - Chị Linh (Kiểm tra chất lượng):**

Để vào chế độ Product Owner:
```bash  
/po
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*execute-checklist-po         # Chạy master checklist
*shard-doc "tài liệu" "thư mục đích"  # Chia tài liệu thành parts
*validate-story-draft "story" # Kiểm tra chất lượng story
*create-epic                  # Tạo epic cho brownfield
*correct-course               # Điều chỉnh course
*yolo                         # Bật/tắt confirmations
*exit                         # Thoát khỏi chế độ PO
```

**Ví dụ sử dụng:**
```bash
/po
*shard-doc docs/prd.md docs/prd
# Tự động chia PRD thành:
# docs/prd/goals.md
# docs/prd/features.md
# docs/prd/technical-requirements.md

*validate-story-draft docs/stories/story-1-1.md
# Kiểm tra story có đầy đủ thông tin không
# Validate với yêu cầu trong PRD
```

**Developer - Anh Tuấn (Lập trình viên):**

Để vào chế độ Developer:
```bash
/dev  
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*develop-story                # Implement story từ đầu đến cuối
*run-tests                    # Chạy tests và linting  
*explain                      # Giải thích code vừa viết
*exit                         # Thoát khỏi chế độ Dev
```

**Ví dụ sử dụng:**
```bash
/dev
*develop-story
# Đọc story requirements
# Implement từng task theo thứ tự
# Viết tests
# Cập nhật tiến độ vào story
# Đánh dấu story "Ready for Review"
```

**QA Engineer - Anh Quang (Kiểm tra chất lượng code):**

Để vào chế độ QA:
```bash
/qa
```

Các lệnh có thể dùng:
```bash
*help                          # Hiện tất cả lệnh có sẵn
*review "story"               # Review code và refactor
*exit                         # Thoát khỏi chế độ QA  
```

**Ví dụ sử dụng:**
```bash
/qa
*review docs/stories/story-1-1.md
# Review code từ dev
# Active refactoring với giải thích chi tiết
# Cập nhật "QA Results" section
# Đánh dấu "Approved" hoặc "Changes Required"  
```

### **Quy trình làm việc thông thường**

**Tạo tính năng mới hoàn chỉnh:**
```bash
# 1. Lập kế hoạch tính năng  
/analyst
*brainstorm "hệ thống đăng nhập người dùng"

# 2. Tạo yêu cầu
/pm
*create-prd

# 3. Thiết kế UX (nếu cần)
/ux-expert
*create-front-end-spec

# 4. Tạo stories
/sm
*draft

# 5. Kiểm tra story  
/po
*validate-story-draft docs/stories/story-1-1.md

# 6. Lập trình  
/dev
*develop-story

# 7. Review chất lượng
/qa  
*review docs/stories/story-1-1.md
```

**Sửa bug nhanh:**
```bash  
# 1. Tạo bug story
/sm
*draft  # Mô tả bug và cách fix

# 2. Implement fix
/dev
*develop-story  # Fix + tests

# 3. Senior review
/qa
*review  # Đảm bảo không gây lỗi khác
```

**Kiểm tra tình trạng dự án:**
```bash
# Kiểm tra document alignment
/po  
*execute-checklist-po

# Review chất lượng code
/qa
*review  # Review stories gần đây

# Lập kế hoạch iteration tiếp  
/sm
*draft   # Tạo stories tiếp theo
```

### **Cấu trúc thư mục**

```
du-an-cua-toi/
├── .bmad-core/                 # Core files của BMad Method
│   ├── agents/                 # Định nghĩa agents
│   ├── tasks/                  # Workflow tasks  
│   ├── templates/              # Document templates
│   ├── data/                   # Knowledge base
│   └── core-config.yaml        # Config chính
├── .claude/                    # Config của Claude Code
│   └── commands/BMad/          # Định nghĩa lệnh agents
├── docs/                       # Tài liệu dự án
│   ├── prd.md                  # Product Requirements
│   ├── architecture.md         # System Architecture
│   ├── prd/                    # PRD được chia nhỏ
│   ├── architecture/           # Architecture được chia nhỏ  
│   └── stories/                # User stories
├── src/                        # Source code
└── README.md                   # Tổng quan dự án
```

### **Cấu hình quan trọng**

**Core Config (.bmad-core/core-config.yaml):**
```yaml  
# Files mà Dev agent luôn phải đọc
devLoadAlwaysFiles:
  - docs/architecture/coding-standards.md
  - docs/architecture/tech-stack.md
  - docs/architecture/project-structure.md

# Cấu hình PRD
prd:
  prdFile: docs/prd.md
  prdSharded: true
  prdShardedLocation: docs/prd

# Cấu hình Architecture  
architecture:
  architectureFile: docs/architecture.md
  architectureSharded: true
  architectureShardedLocation: docs/architecture

# Vị trí lưu stories
devStoryLocation: docs/stories
```

**Technical Preferences (.bmad-core/data/technical-preferences.md):**
```markdown
# Technical Preferences

## Frontend
- Framework: React với TypeScript
- State Management: Zustand
- Styling: Tailwind CSS  
- UI Components: shadcn/ui

## Backend
- Runtime: Node.js
- Framework: Express.js
- Database: PostgreSQL
- ORM: Prisma

## Testing
- Unit Tests: Jest
- Integration Tests: Supertest
- E2E Tests: Playwright

## Deployment  
- Platform: Vercel (Frontend) + Railway (Backend)
- Database: Neon PostgreSQL
```

### **Mẹo tăng năng suất**

**Tăng tốc độ làm việc:**

1. **Dùng YOLO Mode khi cần nhanh:**
   ```bash
   /po
   *yolo  # Bỏ qua confirmations
   ```

2. **Làm nhiều công việc cùng lúc:**
   ```bash
   /sm  
   *draft  # Tạo nhiều stories
   *draft
   *draft
   ```

3. **Kiểm tra định kỳ:**
   ```bash
   /po
   *execute-checklist-po  # Kiểm tra hàng tuần
   ```

**Đảm bảo chất lượng:**

1. **Luôn validate stories:**  
   ```bash
   /po
   *validate-story-draft "story"  # Trước khi dev
   ```

2. **Dùng QA cho mọi code:**
   ```bash
   /qa
   *review  # Không bao giờ bỏ qua QA review
   ```

3. **Giữ tài liệu cập nhật:**
   ```bash  
   /po
   *shard-doc  # Sau khi thay đổi PRD lớn
   ```

**Tối ưu quy trình làm việc:**

1. **Bắt đầu nhỏ, mở rộng dần:**
   - Làm 1-2 tính năng cốt lõi trước
   - Thêm complexity từ từ  
   - Thu thập feedback thường xuyên

2. **Duy trì chất lượng tài liệu:**
   - Tài liệu chia nhỏ load nhanh hơn
   - Cập nhật technical preferences thường xuyên
   - Review architecture định kỳ

3. **Tận dụng điểm mạnh từng agent:**
   - Analyst: Nghiên cứu rộng và ideation
   - PM: Yêu cầu có cấu trúc
   - Dev: Implementation tập trung  
   - QA: Chất lượng và mentorship

### **Xử lý sự cố thường gặp**

**Vấn đề: Agent không nhớ context**
```bash
# Giải pháp: Kiểm tra cấu trúc tài liệu
/po
*execute-checklist-po  # Verify documents có aligned không
```

**Vấn đề: Stories thiếu chi tiết**
```bash
# Giải pháp: Validation tốt hơn
/po  
*validate-story-draft "story"  # Trước khi development
```

**Vấn đề: Chất lượng code không đồng nhất**
```bash
# Giải pháp: Luôn dùng QA
/qa
*review  # Không bỏ qua reviews
```

**Vấn đề: Development quá chậm**
```bash
# Giải pháp: Kiểm tra kích thước story  
/sm
*draft  # Chia nhỏ stories lớn
```

**Tối ưu hiệu suất:**

1. **Document sharding:**
   ```bash
   /po
   *shard-doc docs/prd.md docs/prd
   ```

2. **Dùng technical preferences:**
   - Cập nhật .bmad-core/data/technical-preferences.md
   - Agents sẽ theo preferences này

3. **Dọn dẹp định kỳ:**
   - Xóa files không dùng
   - Archive stories đã hoàn thành
   - Cập nhật core config

---

*Tiếp tục với Section 5: Ví dụ thực tế...*